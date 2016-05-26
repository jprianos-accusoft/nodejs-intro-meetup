var operations = require('./operations.js');

var op = process.argv[2];
var values = process.argv[3];

if (operations[op]) {
  var numbers = values.split(',');
  debugger;
  var result = operations[op](numbers);
  console.log(result);
} else {
  console.log('The following operations are supported: ' + Object.keys(operations).join(', '));
}
