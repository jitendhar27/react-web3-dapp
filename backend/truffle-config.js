require('dotenv').config();

const GANACHE_URL = process.env.GANACHE_URL || 'http://127.0.0.1:7545';
const urlParts = GANACHE_URL.replace('http://', '').split(':');
const host = urlParts[0] || '127.0.0.1';
const port = parseInt(urlParts[1]) || 7545;

module.exports = {
  networks: {
    development: {
      host: host,
      port: port,
      network_id: '*',
    },
  },
  compilers: {
    solc: {
      version: '0.8.0',
    },
  },
};
