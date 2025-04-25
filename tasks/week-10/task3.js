// Define strategy functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// Use strategy as parameter
function calculate(a, b, strategy) {
  return strategy(a, b);
}

console.log(calculate(5, 3, add));      // 8
console.log(calculate(5, 3, subtract)); // 2
