var bitcoin = require('bitcoinjs-lib');
var bitcoinMessage = require('bitcoinjs-message');

// want this wifkey in base58
var wifkey=process.argv[2];
if (typeof wifkey == 'undefined')
  throw('wtf com wifkey message');

var keyPair = bitcoin.ECPair.fromWIF(wifkey);
var privateKey = keyPair.privateKey;
var message = process.argv[3];
if (typeof message == 'undefined')
  throw('wtf com key message');

var signature = bitcoinMessage.sign(message, privateKey, keyPair.compressed);
console.log(signature.toString('base64'));

