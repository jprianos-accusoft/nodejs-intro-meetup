function addFive(input) {
  return Promise.resolve(input + 5);
}

function multiplyByThree(input) {
  return Promise.resolve(input * 3);
}

function divideTenByNumber(input) {
  return new Promise((resolve, reject) => {
    if (!input || input === 0) {
      reject(new Error('DivideByZero'));
    } else {
      resolve(10 / input);
    }
  });
}

function processValue(value) {
  return addFive(value)
    .then(multiplyByThree)
    .then(divideTenByNumber);
}

processValue(parseInt(process.argv[2]))
  .then(result => {
    console.log('Result is: ' + result);
  })
  .catch(err => {
    console.error('Error: ' + err.message);
  });
