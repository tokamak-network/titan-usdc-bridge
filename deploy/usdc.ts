import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

import {
    VERIFICATION_BLOCK_CONFIRMATIONS,
    networkConfig,
    networkConfigItem,
} from "../helper-hardhat-config"

const deployUsdc: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    // console.log('hre.network.config.chainId', hre.network.config.chainId)
    // console.log('hre.network.name', hre.network.name)

    const { deployer, l1UsdcAddress} = await hre.getNamedAccounts();
    const { deploy } = hre.deployments;
    const chainId = hre.network.config.chainId != null? hre.network.config.chainId : 1

    const deploySigner = await hre.ethers.getSigner(deployer);

    let SignatureChecker_AbiInfo = require("../artifacts-usdc/contracts/util/SignatureChecker.sol/SignatureChecker.json")
    let FiatTokenV2_2_AbiInfo = require("../artifacts-usdc/contracts/v2/FiatTokenV2_2.sol/FiatTokenV2_2.json")
    let FiatTokenProxy_AbiInfo = require("../artifacts-usdc/contracts/v1/FiatTokenProxy.sol/FiatTokenProxy.json")
    let MasterMinter_AbiInfo = require("../artifacts-usdc/contracts/minting/MasterMinter.sol/MasterMinter.json")

    const THROWAWAY_ADDRESS = "0x0000000000000000000000000000000000000001"

    let proxyAdminAddress = networkConfig[chainId]["PROXY_ADMIN_ADDRESS"]
    let ownerAddress = networkConfig[chainId]["OWNER_ADDRESS"]
    let pauserAddress = networkConfig[chainId]["PAUSER_ADDRESS"]
    let blacklisterAddress = networkConfig[chainId]["BLACKLISTER_ADDRESS"]
    let lostAndFoundAddress = networkConfig[chainId]["LOST_AND_FOUND_ADDRESS"]
    let masterMinterOwnerAddress = networkConfig[chainId]["MASTERMINTER_OWNER_ADDRESS"]
    let fiatTokenImplementationAddress = networkConfig[chainId]["FIAT_TOKEN_IMPLEMENTATION_ADDRESS"]
    let tokenName = networkConfig[chainId]["TOKEN_NAME"]
    let tokenSymbol = networkConfig[chainId]["TOKEN_SYMBOL"]
    let tokenCurrency = networkConfig[chainId]["TOKEN_CURRENCY"]
    let tokenDecimals = networkConfig[chainId]["TOKEN_DECIMALS"]


    //==== SignatureChecker =================================
    const SignatureCheckereDeployment = await deploy("SignatureChecker", {
        from: deployer,
        contract: SignatureChecker_AbiInfo,
        args: [],
        log: true,
    });

    //==== FiatTokenV2_2 =================================
    const FiatTokenV2_2Deployment = await deploy("FiatTokenV2_2", {
        from: deployer,
        contract: FiatTokenV2_2_AbiInfo,
        libraries: {SignatureChecker: SignatureCheckereDeployment.address},
        args: [],
        log: true,
    });

    let fiatTokenV2_2_Logic = await hre.ethers.getContractAt(FiatTokenV2_2_AbiInfo.abi, FiatTokenV2_2Deployment.address, deploySigner)
    let masterMinter = await fiatTokenV2_2_Logic.masterMinter()
    if(masterMinter == '0x0000000000000000000000000000000000000000' ){
        await (await fiatTokenV2_2_Logic.initialize(
            "",
            "",
            "",
            0,
            THROWAWAY_ADDRESS,
            THROWAWAY_ADDRESS,
            THROWAWAY_ADDRESS,
            THROWAWAY_ADDRESS,
        )).wait()
        await (await fiatTokenV2_2_Logic.initializeV2("")).wait()
        await (await fiatTokenV2_2_Logic.initializeV2_1(THROWAWAY_ADDRESS)).wait()
        await (await fiatTokenV2_2_Logic.initializeV2_2([], "")).wait()
    }

    //==== FiatTokenProxy =================================
    const FiatTokenProxyDeployment = await deploy("FiatTokenProxy", {
        from: deployer,
        contract: FiatTokenProxy_AbiInfo,
        args: [FiatTokenV2_2Deployment.address],
        log: true,
    });

    const fiatTokenProxy = await hre.ethers.getContractAt(FiatTokenProxy_AbiInfo.abi, FiatTokenProxyDeployment.address, deploySigner)
    fiatTokenImplementationAddress = await fiatTokenProxy.implementation()
    if (fiatTokenImplementationAddress != FiatTokenV2_2Deployment.address) {
        await (await fiatTokenProxy.connect(deploySigner).upgradeTo(FiatTokenV2_2Deployment.address)).wait()
    }

    //==== MasterMinter =================================
    const MasterMinterDeployment = await deploy("MasterMinter", {
        from: deployer,
        contract: MasterMinter_AbiInfo,
        args: [FiatTokenProxyDeployment.address],
        log: true,
    });
    const masterMinterContract = await hre.ethers.getContractAt(MasterMinter_AbiInfo.abi, MasterMinterDeployment.address, deploySigner)

    let masterMinterOwner = await masterMinterContract.owner()
    if(masterMinterOwner != masterMinterOwnerAddress){
        await (await masterMinterContract.transferOwnership(masterMinterOwnerAddress)).wait()
    }

    //==== Set FiatTokenProxy =================================
    let proxyAdmin = await fiatTokenProxy.admin()
    if (proxyAdmin != proxyAdminAddress){
        await (await fiatTokenProxy.connect(deploySigner).changeAdmin(proxyAdminAddress)).wait()
    }

    const fiatToken = await hre.ethers.getContractAt(FiatTokenV2_2_AbiInfo.abi, FiatTokenProxyDeployment.address, deploySigner)

    await (await fiatToken.initialize(
         tokenName,
         tokenSymbol,
         tokenCurrency,
         tokenDecimals,
         MasterMinterDeployment.address,
         pauserAddress,
         blacklisterAddress,
         ownerAddress,
     )).wait()

     await (await fiatToken.initializeV2(tokenName)).wait()
     await (await fiatToken.initializeV2_1(lostAndFoundAddress)).wait()
     await (await fiatToken.initializeV2_2([], tokenSymbol)).wait()

    //==== verify =================================
    if (hre.network.name != "hardhat" && hre.network.name != "localhost") {
        await hre.run("etherscan-verify", {
            network: hre.network.name
        });
    }
};

export default deployUsdc;
deployUsdc.tags = [
    'all','usdc'
];
