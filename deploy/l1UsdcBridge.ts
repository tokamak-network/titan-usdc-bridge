import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployL1UsdcBridge: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    // console.log('hre.network.config.chainId', hre.network.config.chainId)
    // console.log('hre.network.name', hre.network.name)

    const { deployer, l1UsdcAddress} = await hre.getNamedAccounts();
    const { deploy } = hre.deployments;

    const deploySigner = await hre.ethers.getSigner(deployer);

    //==== L1UsdcBridge =================================
    const L1UsdcBridgeDeployment = await deploy("L1UsdcBridge", {
        from: deployer,
        args: [],
        log: true,
    });

    //==== L1UsdcBridgeProxy =================================
    const L1UsdcBridgeProxyDeployment = await deploy("L1UsdcBridgeProxy", {
        from: deployer,
        args: [
            L1UsdcBridgeDeployment.address,
            deployer,
            '0x'
        ],
        log: true
    })

    const l1UsdcBridgeProxy = await hre.ethers.getContractAt("L1UsdcBridgeProxy", L1UsdcBridgeProxyDeployment.address, deploySigner)

    let imp = await l1UsdcBridgeProxy.implementation()
    if (imp != L1UsdcBridgeDeployment.address) {
        await (await l1UsdcBridgeProxy.connect(deploySigner).upgradeTo(L1UsdcBridgeDeployment.address)).wait()
    }

    //==== verify =================================
    if (hre.network.name != "hardhat" && hre.network.name != "localhost") {
        await hre.run("etherscan-verify", {
            network: hre.network.name
        });
    }
};

export default deployL1UsdcBridge;
deployL1UsdcBridge.tags = [
    'all','l1UsdcBridge'
];