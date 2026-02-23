const Calculator = {
  add: (a, b) => a + b,

  subtract: (a, b) => a - b,

  multiply: (a, b) => a * b,

  divide: (a, b) => b === 0 ? "Error" : a / b
};

console.assert(Calculator.add(5, 3) === 8, "add(5, 3) should be 8");
console.assert(Calculator.subtract(10, 4) === 6, "subtract(10, 4) should be 6");
console.assert(Calculator.multiply(6, 7) === 42, "multiply(6, 7) should be 42");
console.assert(Calculator.divide(20, 5) === 4, "divide(20, 5) should be 4");

// Divide-by-zero test
console.assert(Calculator.divide(10, 0) === "Error", 'divide(10, 0) should return "Error", not throw');

console.log("All tests passed.");
