module.exports = {

  add: numberList => {
    var sum = numberList.reduce((a, b) => parseInt(a) + parseInt(b), 0).toString();
    return numberList.join(' + ') + ' = ' + sum;
  },

  multiply: numberList => {
    var product = numberList.reduce((a, b) => parseInt(a) * parseInt(b), 1).toString();
    return numberList.join(' · ') + ' = ' + product;
  }

};
