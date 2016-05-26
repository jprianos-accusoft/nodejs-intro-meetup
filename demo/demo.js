function addFive(input, callback) {
  callback(undefined, input + 5);
}

function multiplyByThree(input, callback) {
  callback(undefined, input * 3);
}

function divideTenByNumber(input, callback) {
  if (!input || input === 0) {
    callback(new Error('DivideByZero'));
  } else {
    callback(undefined, 10 / input);
  }
}

function processValue(value, callback) {
  addFive(value, (err, result) => {
    if (err) {
      callback(err);
    } else {
      multiplyByThree(result, (err, result) => {
        if (err) {
          callback(err);
        } else {
          divideTenByNumber(result, (err, result) => {
            if (err) {
              callback(err);
            } else {
              callback(undefined, result);
            }
          });
        }
      });
    }
  });
}

processValue(parseInt(process.argv[2]), (err, result) => {
  if (err) {
    console.error('Error: ' + err.message);
  } else {
    console.log('Result is: ' + result);
  }
})
