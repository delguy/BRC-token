
require("@nomiclabs/hardhat-waffle");

 /** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    localhost:{}
  paths: {
    sources: "./contracts",  // Default folder for contracts
    tests: "./test",        // Default folder for tests
    cache: "./cache",       // Default folder for cache
    artifacts: "./artifacts"  // Default folder for artifacts
  }
};


