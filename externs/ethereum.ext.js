//var require = function(module) {};
var web3 = {};

web3.sha3 = function(hexStr) {};
web3.toAscii = function(str) {};
web3.fromAscii = function(str, padLen) {};
web3.toDecimal = function(hexStr) {};
web3.fromDecimal = function(bigDec) {};
web3.setProvider = function(provider) {};
web3.reset = function() {};

web3.providers;
web3.providers.HttpSyncProvider = function(opts) {};
web3.providers.QtSyncProvider = function(opts) {};

web3.eth;
web3.eth.coinbase;
web3.eth.listening;
web3.eth.mining;
web3.eth.gasPrice;
web3.eth.accounts;
web3.eth.peerCount;
web3.eth.defaultBlock;
web3.eth.number;

// Ethereum API

web3.eth.balanceAt = function(address) {};
web3.eth.stateAt = function(contractAddr, storeAddr) {};
web3.eth.storageAt = function(contractAddr) {};
web3.eth.countAt = function(acctAddr) {}; 
web3.eth.codeAt = function(acctAddr) {}; 
web3.eth.block = function(blockNum) {};
web3.eth.transaction = function(blockNum, n) {};
web3.eth.uncle = function(blockNum, n) {};
web3.eth.transact = function(params, cb) {};
web3.eth.call = function(params) {};
web3.eth.logs = function(filter) {};
web3.eth.watch = function(filter) {};
web3.eth.contract = function(address, abi) {};
web3.eth.compilers = function() {};

// Builtin-compilers

web3.eth.solidity = function(source) {};
web3.eth.lll = function(source) {};
web3.eth.serpent = function(source) {};

// Local DB

web3.db;
web3.db.put = function(table, key, intVal) {};
web3.db.putString = function(table, key, strVal) {};
web3.db.get = function(table, key) {};
web3.db.getString = function(table, key) {};

// Whsiper
web3.shh;
/* Post a whsiper message.
 * from: identity of sender
 * to: identity of receiver
 * payload: message payload
 * ttl: time to live
 * workToProve: TODO
 * topic: string or array of strings, with message topics */
web3.shh.post = function (msgData) {};
// Creates a new identity address.
web3.shh.newIdentity = function() {};
// Return true iff an entity belongs to us.
web3.shh.haveIdentity = function(ident) {};
/* Returns a watcher for whisper messages matching params.
 * topic: string or array
 * to: identity of receiver */
web3.ssh.watch = function(params) {};

