function someAsyncProcess(delay) {
  return new Promise(function (resolve, reject) {
    if (!delay || !parseInt(delay)) {
      reject(new Error('InvalidDelay'));
    } else {
      console.log('Processing...');
      setTimeout(() => {
        resolve(delay);
      }, delay);
    }
  });
}

function executeWithPromises(delay) {
  someAsyncProcess(delay)
    .then(response => {
      console.log('Processed for ' + response + 'ms');
    })
    .catch(err => {
      console.error('Error: ' + err.message);
    });
}

executeWithPromises(process.argv[2]);
