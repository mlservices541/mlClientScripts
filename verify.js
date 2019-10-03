var bitcoinMessage = require('bitcoinjs-message');

var message = process.argv[2];
if (typeof message == 'undefined')
  throw('wtf com message address signature');

var address = process.argv[3];
if (typeof address == 'undefined')
  throw('wtf com message address signature');

var signature = process.argv[4];
if (typeof signature == 'undefined')
  throw('wtf com message address signature');

console.log(bitcoinMessage.verify(message, address, signature));

