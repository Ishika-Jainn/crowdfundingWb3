// Import Hardhat toolbox plugins
require("@nomicfoundation/hardhat-toolbox");
// Import dotenv to secure your secret variables
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.9", // Match the version used in your smart contract
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  // Default network
  defaultNetwork: "hardhat",

  // Configure networks
  networks: {
    hardhat: {},

    sepolia: {
      url: process.env.SEPOLIA_RPC_URL, // Your Sepolia RPC URL (Alchemy/Infura)
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Your MetaMask private key
      chainId: 11155111,
    },
  },
};
