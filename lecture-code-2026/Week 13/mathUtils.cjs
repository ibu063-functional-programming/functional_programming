// Pure math utility functions

function square(x) {
  return x * x;
}

function double(x) {
  return x * 2;
}

function addOne(x) {
  return x + 1;
}

// Composed transformation: double each number, then add one
function processNumbers(arr) {
  return arr.map(x => addOne(double(x)));
}

module.exports = {
  square,
  double,
  addOne,
  processNumbers
};
