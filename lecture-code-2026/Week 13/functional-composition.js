// Small helper functions (pure):
function double(x) {
  return x * 2;
}
function addOne(x) {
  return x + 1;
}

// Compose them: first double each number, then add one to each result
function processNumbers(numbers) {
  return numbers.map(double).map(addOne);
}

// Example usage:
console.log(processNumbers([1, 2, 3])); // [3, 5, 7]

console.assert(double(5) === 10, "double should multiply by 2");
console.assert(addOne(5) === 6, "addOne should add 1");

console.assert(JSON.stringify(processNumbers([2,4])) === "[5,9]", "Processing [2,4] should yield [5,9]");

