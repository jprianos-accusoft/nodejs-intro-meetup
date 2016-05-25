var express = require('express');
var server = express();
var operations = require('./operations.js');

server.get('/demo/:operation', (req, res) => {
  var op = req.params.operation;
  var values = req.query.numbers;
  if (operations[op]) {
    var numbers = values.split(',');
    var result = operations[op](numbers);
    res.send(result);
  } else {
    res.send('The following operations are supported: ' + Object.keys(operations).join(', '));
  }
});
server.use(express.static('public'));

server.listen(8080);
