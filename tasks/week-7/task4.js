// Helper functions
const isEven = x => x % 2 === 0;
const multiplyByTen = x => x * 10;
const sum = arr => arr.reduce((acc, val) => acc + val, 0);

// Tee function for debugging
const tee = label => value => {
  console.log(`${label}:`, value);
  return value;
};

// Pipeline function
const pipeline = (...fns) => input => fns.reduce((acc, fn) => fn(acc), input);

// Define specific array-processing functions
const filterEvens = arr => arr.filter(isEven);
const multiplyAllByTen = arr => arr.map(multiplyByTen);

// Create pipeline with debug steps
const debugPipeline = pipeline(
  filterEvens,
  tee("Filtered"),
  multiplyAllByTen,
  tee("Multiplied by 10"),
  sum
);

// Execute pipeline
const numbers = [1, 2, 3, 4, 5, 6];
console.log("Sum:", debugPipeline(numbers)); 
// Expected debug logs:
// Filtered: [ 2, 4, 6 ]
// Multiplied by 10: [ 20, 40, 60 ]
// Sum: 120
