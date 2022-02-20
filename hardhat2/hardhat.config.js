require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');

const UNI = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
const WETH = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("account_balances", "...", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  const requiredErc20Abi = [
    // Some details about the token
    "function name() view returns (string)",
    "function symbol() view returns (string)",

    // Get the account balance
    "function balanceOf(address) view returns (uint)",

    // Send some of your tokens to someone else
    "function transfer(address to, uint amount)",

    // An event triggered whenever anyone transfers to someone else
    "event Transfer(address indexed from, address indexed to, uint amount)",
  ];

  const contract1 = new hre.ethers.Contract(
    UNI,
    requiredErc20Abi,
    hre.ethers.provider
  );

  for (let account of accounts) {
    const balance = await contract1.balanceOf(account.address);
    console.log(account.address, balance)
  }

  const contract2 = new hre.ethers.Contract(
    WETH,
    requiredErc20Abi,
    hre.ethers.provider
  );

  for (let account of accounts) {
    const balance = await contract2.balanceOf(account.address);
    console.log(account.address, balance)
  }

  // console.log(await contract.callStatic.symbol())
  // const balance = await contract.symbol();


})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.11",
};
