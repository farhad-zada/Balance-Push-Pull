require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    bsc: {
      url: process.env.BSC_RPC,
      chainId: process.env.BSC_CID * 1,
      accounts: [process.env.PKEY],
      timeout: 60000,
      // pollingInterval: 10000,
      // gasPrice: 40_000_000_000,
    },
    tbsc: {
      url: process.env.TBSC_RPC,
      chainId: process.env.TBSC_CID * 1,
      accounts: [process.env.PKEY],
      timeout: 60000,
      // pollingInterval: 10000,
      gasPrice: 40_000_000_000,
    },
    pol: {
      url: process.env.POL_RPC,
      chainId: process.env.POL_CID * 1,
      accounts: [process.env.PKEY],
      timeout: 60000,
      // pollingInterval: 10000,
      // gasPrice: 40_000_000_000,
    },
    eth: {
      url: process.env.ETH_RPC,
      chainId: process.env.ETH_CID * 1,
      accounts: [process.env.PKEY],
      timeout: 60000,
      // pollingInterval: 10000,
      // gasPrice: 40_000_000_000,
    },
    sep: {
      url: process.env.SEP_RPC,
      chainId: process.env.SEP_CID * 1,
      accounts: [process.env.PKEY],
      timeout: 60000,
      // pollingInterval: 10000,
      // gasPrice: 40_000_000_000,
    },
  },
  etherscan: {
    apiKey: {
      eth: process.env.ETH_APIKEY,
      bsc: process.env.BSC_APIKEY,
      pol: process.env.POL_APIKEY,
    },
  },
};
