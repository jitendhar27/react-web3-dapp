require('dotenv').config();
const Web3 = require('web3');

const web3 = new Web3(process.env.GANACHE_URL);

(async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Ganache Accounts:', accounts);

  const balance = await web3.eth.getBalance(accounts[0]);
  console.log('First Account Balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
})();
