// import {
//   time,
//   loadFixture,
// } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { Signer, BigNumber } from "ethers";

import { ethers, getNamedAccounts, deployments, network} from "hardhat";
import { Deployment } from "hardhat-deploy/types";

import { readContracts, deployedContracts } from "./common_func"

import { MockL1Messenger } from '../typechain-types/contracts/test/MockL1Messenger.sol'
import { MockL2Messenger } from '../typechain-types/contracts/test/MockL2Messenger'
import { L1UsdcBridge } from '../typechain-types/contracts/L1/L1UsdcBridge.sol'
import { L1UsdcBridgeProxy } from '../typechain-types/contracts/L1/L1UsdcBridgeProxy'
import { L2UsdcBridge } from '../typechain-types/contracts/L2/L2UsdcBridge.sol'
import { L2UsdcBridgeProxy } from '../typechain-types/contracts/L2/L2UsdcBridgeProxy'

import { FiatTokenProxy } from '../typechain-types-usdc/contracts/v1/FiatTokenProxy'
import { FiatTokenV2_2 } from '../typechain-types-usdc/contracts/v2/FiatTokenV2_2'
import { MasterMinter } from '../typechain-types-usdc/contracts/minting/MasterMinter'
import { SignatureChecker } from '../typechain-types-usdc/contracts/util/SignatureChecker'

interface UsdcFixture {
  mockL1Messenger : MockL1Messenger,
  mockL2Messenger : MockL2Messenger,
  l1UsdcBridgeLogic : L1UsdcBridge,
  l1UsdcBridge : L1UsdcBridge,
  l1UsdcBridgeProxy : L1UsdcBridgeProxy,
  l2UsdcBridgeLogic : L2UsdcBridge,
  l2UsdcBridge : L2UsdcBridge,
  l2UsdcBridgeProxy : L2UsdcBridgeProxy,
  fiatTokenProxy : FiatTokenProxy,
  fiatTokenV2_2 : FiatTokenV2_2,
  masterMinter : MasterMinter,
  signatureChecker: SignatureChecker
}

async function deployedContractsFixture(deployed: {[name: string]: Deployment}, deployer: Signer) : Promise<UsdcFixture>{

  const mockL1Messenger = await ethers.getContractAt("MockL1Messenger", deployed["MockL1Messenger"].address, deployer) as MockL1Messenger
  const mockL2Messenger = await ethers.getContractAt("MockL2Messenger", deployed["MockL2Messenger"].address, deployer) as MockL2Messenger
  const l1UsdcBridgeLogic = await ethers.getContractAt("L1UsdcBridge", deployed["L1UsdcBridge"].address, deployer) as L1UsdcBridge
  const l1UsdcBridge = await ethers.getContractAt("L1UsdcBridge", deployed["L1UsdcBridgeProxy"].address, deployer) as L1UsdcBridge
  const l1UsdcBridgeProxy = await ethers.getContractAt("L1UsdcBridgeProxy", deployed["L1UsdcBridgeProxy"].address, deployer) as L1UsdcBridgeProxy
  const l2UsdcBridgeLogic = await ethers.getContractAt("L2UsdcBridge", deployed["L2UsdcBridge"].address, deployer) as L2UsdcBridge
  const l2UsdcBridge = await ethers.getContractAt("L2UsdcBridge", deployed["L2UsdcBridgeProxy"].address, deployer) as L2UsdcBridge
  const l2UsdcBridgeProxy = await ethers.getContractAt("L2UsdcBridgeProxy", deployed["L2UsdcBridgeProxy"].address, deployer) as L2UsdcBridgeProxy

  const fiatTokenProxy = await ethers.getContractAt(deployed["FiatTokenProxy"].abi, deployed["FiatTokenProxy"].address,  deployer)
  const fiatTokenV2_2 = await ethers.getContractAt(deployed["FiatTokenV2_2"].abi, deployed["FiatTokenProxy"].address,  deployer)
  const masterMinter = await ethers.getContractAt(deployed["MasterMinter"].abi, deployed["MasterMinter"].address,  deployer)
  const signatureChecker = await ethers.getContractAt(deployed["SignatureChecker"].abi, deployed["SignatureChecker"].address,  deployer)

  return {
    mockL1Messenger : mockL1Messenger,
    mockL2Messenger : mockL2Messenger,
    l1UsdcBridgeLogic : l1UsdcBridgeLogic,
    l1UsdcBridge: l1UsdcBridge,
    l1UsdcBridgeProxy : l1UsdcBridgeProxy,
    l2UsdcBridgeLogic : l2UsdcBridgeLogic,
    l2UsdcBridge: l2UsdcBridge,
    l2UsdcBridgeProxy : l2UsdcBridgeProxy,
    fiatTokenProxy : fiatTokenProxy,
    fiatTokenV2_2 : fiatTokenV2_2,
    masterMinter : masterMinter,
    signatureChecker: signatureChecker
  };
}

async function execAllowance(contract: any, fromSigner: Signer, toAddress: string, amount: BigNumber) {
  let allowance = await contract.allowance(fromSigner.address, toAddress);
  if (allowance.lt(amount)) {
    await (await contract.connect(fromSigner).approve(toAddress, amount));
  }
}


describe("UsdcBridge Test", function () {
  let networkName: string
  let deployer: Signer, tester: Signer, admin:Signer;
  let deployed: {[name: string]: Deployment}
  let accounts: {[name: string]: string}
  let deployedContracts: UsdcFixture
  const ZeroAddress = '0x0000000000000000000000000000000000000000'

  before('create fixture loader', async () => {
    networkName = network.name;
    if (networkName == "hardhat") networkName = "localhost"

    accounts = await getNamedAccounts();
    // console.log("accounts:", accounts)
    deployer = await ethers.getSigner(accounts.deployer);
    tester = await ethers.getSigner(accounts.tester);
    admin = await ethers.getSigner(accounts.admin);
    await network.provider.send("hardhat_setBalance", [
      accounts.tester,
      "0x10000000000000000000000000",
    ]);

    deployed = await deployments.fixture(["all"])

    // console.log('deployed', deployed)
    // let deployed_usdc = await readContracts(__dirname+'/../tokamak-usdc/deployments/'+networkName);

    deployedContracts = await deployedContractsFixture(deployed, deployer)
    // bridgedUsdcContracts = await deployedUsdcContractsFixture(deployed_usdc, deployer)

    // console.log(deployedContracts)
  })


  describe('# MasterMinter ', () => {

    it('configureController : onlyOwner', async () => {

      expect(await deployedContracts.masterMinter.owner()).to.be.not.eq(accounts.deployer)

      await expect(
         deployedContracts.masterMinter.connect(deployer).configureController(
          deployedContracts.l2UsdcBridgeProxy.address,
          deployedContracts.l2UsdcBridgeProxy.address
        )
      ).to.be.rejectedWith("Ownable: caller is not the owner")

    });

    it('configureController : onlyOwner', async () => {

      expect(await deployedContracts.masterMinter.owner()).to.be.eq(accounts.admin)

      await (await deployedContracts.masterMinter.connect(admin).configureController(
        deployedContracts.l2UsdcBridgeProxy.address,
        deployedContracts.l2UsdcBridgeProxy.address
      )).wait()

      expect(
        await deployedContracts.masterMinter.getWorker(deployedContracts.l2UsdcBridgeProxy.address))
          .to.be.eq(deployedContracts.l2UsdcBridgeProxy.address)
    });
  });

  describe('# MockL1Messenger ', () => {

    it('setL2messenger', async () => {
        await (await deployedContracts.mockL1Messenger.connect(deployer).setL2messenger(
          deployed["MockL2Messenger"].address
        )).wait()

        expect(await deployedContracts.mockL1Messenger.l2messenger()).to.be.eq(deployed["MockL2Messenger"].address)
    });

  })

  describe('# MockL2Messenger ', () => {

    it('setL1messenger', async () => {
      await (await deployedContracts.mockL2Messenger.connect(deployer).setL1messenger(
        deployed["MockL1Messenger"].address
      )).wait()
      expect(await deployedContracts.mockL2Messenger.l1CrossDomainMessenger()).to.be.eq(deployed["MockL1Messenger"].address)
    });
  })

  describe('# L1UsdcBridge  ', () => {

    it('check l1UsdcBridgeProxy\'s logic', async () => {
      expect(await deployedContracts.l1UsdcBridgeProxy.implementation()).to.be.eq(
        deployedContracts.l1UsdcBridgeLogic.address )
    });

    it('setAddress : onlyProxyOwner', async () => {

      await expect(
        deployedContracts.l1UsdcBridgeProxy.connect(tester).setAddress(
          ZeroAddress,
          ZeroAddress,
          ZeroAddress,
          ZeroAddress
        )
      ).to.be.rejectedWith("not owner");
    });

    it('setAddress : onlyProxyOwner', async () => {
      // console.log('bridgedUsdcContracts.fiatTokenProxy', bridgedUsdcContracts.fiatTokenProxy)

      await (await deployedContracts.l1UsdcBridgeProxy.connect(deployer).setAddress(
          deployedContracts.mockL1Messenger.address,
          deployedContracts.l2UsdcBridgeProxy.address,
          accounts.l1UsdcAddress,
          deployedContracts.fiatTokenProxy.address
        )
      ).wait()

      expect(await deployedContracts.l1UsdcBridgeProxy.messenger()).to.be.eq(deployedContracts.mockL1Messenger.address)
      expect(await deployedContracts.l1UsdcBridgeProxy.otherBridge()).to.be.eq(deployedContracts.l2UsdcBridgeProxy.address)
      expect(await deployedContracts.l1UsdcBridgeProxy.l1Usdc()).to.be.eq(accounts.l1UsdcAddress)
      expect(await deployedContracts.l1UsdcBridgeProxy.l2Usdc()).to.be.eq(deployedContracts.fiatTokenProxy.address)
    });

  })

  describe('# L2UsdcBridge  ', () => {

    it('check l2UsdcBridgeProxy\'s logic', async () => {
      expect(await deployedContracts.l2UsdcBridgeProxy.implementation()).to.be.eq(
        deployedContracts.l2UsdcBridgeLogic.address )
    });

    it('setAddress : onlyProxyOwner', async () => {
      await expect(
        deployedContracts.l2UsdcBridgeProxy.connect(tester).setAddress(
          ZeroAddress,
          ZeroAddress,
          ZeroAddress,
          ZeroAddress,
          ZeroAddress,
        )
      ).to.be.rejectedWith("not owner");
    });

    it('setAddress : onlyProxyOwner', async () => {
      // console.log('bridgedUsdcContracts.fiatTokenProxy', bridgedUsdcContracts.fiatTokenProxy)

      await (await deployedContracts.l2UsdcBridgeProxy.connect(deployer).setAddress(
          deployedContracts.mockL2Messenger.address,
          deployedContracts.l1UsdcBridgeProxy.address,
          accounts.l1UsdcAddress,
          deployedContracts.fiatTokenProxy.address,
          deployedContracts.masterMinter.address
        )
      ).wait()

      expect(await deployedContracts.l2UsdcBridgeProxy.messenger()).to.be.eq(deployedContracts.mockL2Messenger.address)
      expect(await deployedContracts.l2UsdcBridgeProxy.otherBridge()).to.be.eq(deployedContracts.l1UsdcBridgeProxy.address)
      expect(await deployedContracts.l2UsdcBridgeProxy.l1Usdc()).to.be.eq(accounts.l1UsdcAddress)
      expect(await deployedContracts.l2UsdcBridgeProxy.l2Usdc()).to.be.eq(deployedContracts.fiatTokenProxy.address)
      expect(await deployedContracts.l2UsdcBridgeProxy.l2UsdcMasterMinter()).to.be.eq(deployedContracts.masterMinter.address)

    });

  })

  describe('# Deposit From L1', () => {

    it('deposit', async () => {
      console.log('sepolia usdc가 있는 계정을 tester로 지정해둡니다. ')
      console.log('accounts.tester', accounts.tester)

      const amount = BigNumber.from("100")
      const minGasLimit = 200000
      const usdcL1 = await ethers.getContractAt(deployed["FiatTokenV2_2"].abi, accounts.l1UsdcAddress, deployer)

      let balancePrevL1 = await usdcL1.balanceOf(accounts.tester)
      let balancePrevL2 = await deployedContracts.fiatTokenV2_2.balanceOf(accounts.tester)

      await execAllowance(usdcL1, tester, deployedContracts.l1UsdcBridgeProxy.address, amount)

      await (await deployedContracts.l1UsdcBridge.connect(tester).depositERC20(
        accounts.l1UsdcAddress,
        deployedContracts.fiatTokenProxy.address,
        amount,
        minGasLimit,
        '0x'
      )).wait()

      expect(await usdcL1.balanceOf(accounts.tester)).to.be.eq(balancePrevL1.sub(amount))
      expect(await deployedContracts.fiatTokenV2_2.balanceOf(accounts.tester)).to.be.eq(balancePrevL2.add(amount))

    });
  })

  describe('# Withdraw From L2', () => {

    it('withdraw', async () => {

      // console.log('accounts.tester', accounts.tester)
      // console.log('l1UsdcAddress', accounts.l1UsdcAddress)
      // console.log('L2 usdc ', deployedContracts.fiatTokenProxy.address)
      // console.log('mockL1Messenger ', deployedContracts.mockL1Messenger.address)
      // console.log('mockL2Messenger ', deployedContracts.mockL2Messenger.address)
      // console.log('l1UsdcBridgeProxy ', deployedContracts.l1UsdcBridgeProxy.address)


      const amount = BigNumber.from("50")
      const minGasLimit = 200000
      const usdcL1 = await ethers.getContractAt(deployed["FiatTokenV2_2"].abi, accounts.l1UsdcAddress, deployer)

      let balancePrevL1 = await usdcL1.balanceOf(accounts.tester)
      let balancePrevL2 = await deployedContracts.fiatTokenV2_2.balanceOf(accounts.tester)

      await execAllowance(deployedContracts.fiatTokenV2_2, tester, deployedContracts.l2UsdcBridgeProxy.address, amount)

      await (await deployedContracts.l2UsdcBridge.connect(tester).withdraw(
        deployedContracts.fiatTokenProxy.address,
        amount,
        minGasLimit,
        '0x'
      )).wait()

      expect(await usdcL1.balanceOf(accounts.tester)).to.be.eq(balancePrevL1.add(amount))
      expect(await deployedContracts.fiatTokenV2_2.balanceOf(accounts.tester)).to.be.eq(balancePrevL2.sub(amount))

    });
  })

})
