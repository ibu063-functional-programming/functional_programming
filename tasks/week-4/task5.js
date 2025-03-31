//Check if Any Number is Negative
const hasNegativeNumber = (arr) => arr.some(num => num < 0);

// Example usage:
console.log(hasNegativeNumber([3, -5, 7])); // Output: true
console.log(hasNegativeNumber([3, 5, 7]));  // Output: false

