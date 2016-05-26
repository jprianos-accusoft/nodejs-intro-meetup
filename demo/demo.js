function someAsyncProcess(delay, callback) {
  if (!delay || !parseInt(delay)) {
    callback(new Error('InvalidDelay'));
  } else {
    console.log('Processing...');
    setTimeout(() => {
      callback(undefined, delay);
    }, delay);
  }
}

function executeWithCallbacks(delay) {
  someAsyncProcess(delay, function (err, response) {
    if (err) {
      console.error('Error: ' + err.message);
    } else {
      console.log('Processed for ' + response + 'ms');
    }
  });
}

executeWithCallbacks(process.argv[2]);
