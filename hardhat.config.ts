import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import "hardhat-gas-reporter";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    bsmctest: {
      url: "https://bsc-testnet-dataseed.bnbchain.org",
      accounts: [process.env.PRIV_KEY as string]
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY
  },
};

export default config;
