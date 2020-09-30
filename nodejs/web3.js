var Web3 = require('web3')

var eth_rpc				 = 'http://localhost:8545'
var eth_rpc_websocket    = 'ws://localhost:8545'

//var web3       = new Web3(new Web3.providers.HttpProvider(eth_rpc));

var web3       = new Web3(new Web3.providers.WebsocketProvider(eth_rpc_websocket));

module.exports = web3