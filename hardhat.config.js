/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle")
const INFURA_API_KEY="";   // Metamask private key
const ROPSTEN_PRIVATE_KEY=""; //   and infura API Key
module.exports = {
  solidity: "0.8.19",
  networks:{
    ropsten:{
      url:` `,
      accounts:[`${ROPSTEN_PRIVATE_KEY}`],
    },
  }
};
