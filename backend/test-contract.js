require('dotenv').config();
const Web3 = require('web3');
const contractJSON = require('./build/contracts/InfoContract.json');

const web3 = new Web3(process.env.GANACHE_URL);
const contractAddress = process.env.CONTRACT_ADDRESS;

(async () => {
  const accounts = await web3.eth.getAccounts();
  const contract = new web3.eth.Contract(contractJSON.abi, contractAddress);

  console.log('Connected to contract at:', contractAddress);
  console.log('Using account:', accounts[0]);

  // Read initial info
  const currentInfo = await contract.methods.getInfo().call();
  console.log('Current Info:', currentInfo);

  // Update info
  const tx = await contract.methods.setInfo('Updated via Node.js').send({ from: accounts[0] });
  console.log('Transaction Hash:', tx.transactionHash);

  // Read updated info
  const updatedInfo = await contract.methods.getInfo().call();
  console.log('Updated Info:', updatedInfo);
})();
