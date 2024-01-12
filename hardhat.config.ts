// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-toolbox";
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
// import "@nomiclabs/hardhat-waffle";
// import "@nomicfoundation/hardhat-verify";
import "@nomiclabs/hardhat-etherscan";

import "hardhat-gas-reporter";
import dotenv from "dotenv" ;
import { HardhatUserConfig } from "hardhat/types";
import "hardhat-deploy";

dotenv.config();

const config: HardhatUserConfig = {
  namedAccounts: {
    deployer: 0,
    user: 1,
    l1UsdcAddress: {
      default: 2,
      hardhat: '0x693a591A27750eED2A0e14BC73bB1F313116a1cb',
      localhost: '0x693a591A27750eED2A0e14BC73bB1F313116a1cb',
    },
    admin: `privatekey://${process.env.ADMIN_PRIVATE_KEY}`,
    tester: `privatekey://${process.env.PRIVATE_KEY}`,
  },
  networks: {
    hardhat: {
      forking: {
        url: `${process.env.ETH_NODE_URI_sepolia}`,
        blockNumber: 5063260
      },
      allowUnlimitedContractSize: false,
      // deploy: ['deploy'],
      // companionNetworks: {
      //   l2: 'hardhat',
      // },
      chainId: 31337,
    },
    localhost: {
      url: 'http://127.0.0.1:8545/',
      allowUnlimitedContractSize: false,
      chainId: 31337,
    },
    opsepolia: {
      url: `${process.env.ETH_NODE_URI_opsepolia}`,
      accounts: [`${process.env.ADMIN_PRIVATE_KEY}`],
      chainId: 11155420,
      // gasPrice: 250000,
      // deploy: ['deploy_l2_proxy']
    },
    sepolia: {
      url: `${process.env.ETH_NODE_URI_sepolia}`,
      accounts: [`${process.env.ADMIN_PRIVATE_KEY}`],
      // deploy: ['deploy_l2_proxy']
    },
  },
  deterministicDeployment: (network: string) => {
    // Skip on hardhat's local network.
    if (network === "31337") {
      return undefined;
    } else {
      return {
        factory: "0x4e59b44847b379578588920ca78fbf26c0b4956c",
        deployer: "0x3fab184622dc19b6109349b94811493bf2a45362",
        funding: "10000000000000000",
        signedTx: "0x00",
      }
    }
  },
  etherscan: {
    apiKey: {
      mainnet: `${process.env.ETHERSCAN_API_KEY}`,
      goerli: `${process.env.ETHERSCAN_API_KEY}`,
      sepolia: `${process.env.ETHERSCAN_API_KEY}`,
      opsepolia:  `${process.env.ETHERSCAN_API_KEY}`,
    } ,
    customChains: [
      {
        network: "opsepolia",
        chainId: 11155420,
        urls: {
          apiURL: "https://sepolia-optimistic.etherscan.io/api",
          browserURL: "https://sepolia-optimistic.etherscan.io"
        },
      }
    ]
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    gasPrice: 21,
    coinmarketcap: `${process.env.COINMARKETCAP_API_KEY}`
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  typechain: {
    outDir: "typechain-types",
    target: "ethers-v5",
  },
  solidity: {
    version: '0.8.20',
    settings: {
      optimizer: {
        enabled: true,
        runs: 625,
      },
      // viaIR: true,
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.8.12/metadata.html
        bytecodeHash: 'none',
      },
    },
  },
};

export default config;
