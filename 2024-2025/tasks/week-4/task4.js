//Find the Maximum Number
const findMax = (arr) => arr.reduce((max, num) => (num > max ? num : max), arr[0]);

// Example usage:
console.log(findMax([10, 20, 5, 40, 30])); // Output: 40

