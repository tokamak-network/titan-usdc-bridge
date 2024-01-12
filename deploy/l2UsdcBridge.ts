import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployL2UsdcBridge: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    // console.log('hre.network.config.chainId', hre.network.config.chainId)
    // console.log('hre.network.name', hre.network.name)

    const { deployer, l1UsdcAddress} = await hre.getNamedAccounts();
    const { deploy } = hre.deployments;

    const deploySigner = await hre.ethers.getSigner(deployer);

    //==== L2UsdcBridge =================================
    const L2UsdcBridgeDeployment = await deploy("L2UsdcBridge", {
        from: deployer,
        args: [],
        log: true,
    });

    //==== L2UsdcBridgeProxy =================================
    const L2UsdcBridgeProxyDeployment = await deploy("L2UsdcBridgeProxy", {
        from: deployer,
        args: [
            L2UsdcBridgeDeployment.address,
            deployer,
            '0x'
        ],
        log: true
    })

    const l2UsdcBridgeProxy = await hre.ethers.getContractAt("L2UsdcBridgeProxy", L2UsdcBridgeProxyDeployment.address, deploySigner)

    let imp = await l2UsdcBridgeProxy.implementation()
    if (imp != L2UsdcBridgeDeployment.address) {
        await (await l2UsdcBridgeProxy.connect(deploySigner).upgradeTo(L2UsdcBridgeDeployment.address)).wait()
    }

    //==== verify =================================
    if (hre.network.name != "hardhat" && hre.network.name != "localhost") {
        await hre.run("etherscan-verify", {
            network: hre.network.name
        });
    }
};

export default deployL2UsdcBridge;
deployL2UsdcBridge.tags = [
    'all','l2UsdcBridge'
];