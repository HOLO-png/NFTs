require("@nomicfoundation/hardhat-toolbox");

const { API_URL, PRIVATE_KEY } = process.env;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/XGw5DxJES13baBpLdsEWLROrIkOMfVnz",
      accounts: [
        `0x${"9bbd582aa96d89b710aab0f666eaae935999f9cfa2930b91cc68fd6bc5162671"}`,
      ],
    },
  },
};
