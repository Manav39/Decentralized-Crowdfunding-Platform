const hre = require('hardhat')
const fs = require('fs')
require('dotenv').config()

async function main() {
  const Contract = await hre.ethers.getContractFactory('Versura')
  const contract = await Contract.deploy()

  await contract.deployed()

  const address = JSON.stringify({ address: contract.address }, null, 4)
  fs.writeFile('./src/abis/contractAddress.json', address, 'utf8', (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Deployed contract address', contract.address)
  })
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

// async function main() {
//   const [deployer] = await ethers.getSigners();

//   const Token = await ethers.getContractFactory("Versura");
//   const token = await Token.deploy();
//   console.log("Token address:", token.address);
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });