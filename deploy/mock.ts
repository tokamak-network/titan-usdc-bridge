import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployMock: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    // console.log('hre.network.config.chainId', hre.network.config.chainId)
    // console.log('hre.network.name', hre.network.name)

    const { deployer, l1UsdcAddress} = await hre.getNamedAccounts();
    const { deploy } = hre.deployments;

    const deploySigner = await hre.ethers.getSigner(deployer);

    //==== MockL1Messenger =================================
    const MockL1MessengerDeployment = await deploy("MockL1Messenger", {
        from: deployer,
        args: [],
        log: true,
    })

    //==== MockL2Messenger =================================
    const MockL2MessengerDeployment = await deploy("MockL2Messenger", {
        from: deployer,
        args: [],
        log: true,
    });

    //==== verify =================================
    if (hre.network.name != "hardhat" && hre.network.name != "localhost") {
        await hre.run("etherscan-verify", {
            network: hre.network.name
        });
    }
};

export default deployMock;
deployMock.tags = [
    'all','messenger'
];