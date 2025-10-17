const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:7545'); // Local Ganache
(async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Ganache accounts:', accounts);

  const balance = await web3.eth.getBalance(accounts[0]);
  console.log('Balance of first account:', web3.utils.fromWei(balance, 'ether'), 'ETH');
})();
