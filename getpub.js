var bitcoin = require('bitcoinjs-lib');

// want this wifkey in base58
var wifkey=process.argv[2];
if (typeof wifkey == 'undefined')
  throw('wtf wifkey');

var keyPair = bitcoin.ECPair.fromWIF(wifkey);
var publicKey = keyPair.publicKey;
const { address } = bitcoin.payments.p2pkh({ pubkey: publicKey });
console.log(address);


