// Function definitions
const double = x => x * 2;
const square = x => x * x;
const subtractFive = x => x - 5;

// Pipeline utility
const pipeline = (...fns) => input => fns.reduce((acc, fn) => fn(acc), input);

// Pipeline setup
const processNumber = pipeline(double, square, subtractFive);

// Test pipeline
console.log(processNumber(3));  // Expected output: 31
