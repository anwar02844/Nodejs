var hello = require('./hello');
var anwar= require('./anwar');
console.log('Loaded hello module');
console.log(hello());

console.log('----------------');
console.log(anwar.property1);
anwar.property1 = 'yyyyy';
console.log(anwar.property1);
console.log(anwar.add());