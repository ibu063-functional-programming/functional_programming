/*function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
// Basic test cases
console.assert(capitalize("john") === "John", 'Test 1 Failed: "john" → "John"');
console.assert(capitalize("DOE") === "Doe", 'Test 2 Failed: "DOE" → "Doe"');
console.assert(capitalize("aLICE") === "Alice", 'Test 3 Failed: "aLICE" → "Alice"');
// Edge cases
console.assert(capitalize("") === "undefined", 'Edge Case Failed: "" → "undefined"'); // buggy case
console.assert(capitalize("a") === "A", 'Edge Case Failed: "a" → "A"');*/

//Improved function: 
function capitalize2(str) {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
console.assert(capitalize2("john") === "John", 'Test 1 Failed');
console.assert(capitalize2("DOE") === "Doe", 'Test 2 Failed');
console.assert(capitalize2("aLICE") === "Alice", 'Test 3 Failed');

// Edge cases
console.assert(capitalize2("") === "", 'Edge Case Failed: "" → ""');
console.assert(capitalize2("A") === "A", 'Edge Case Failed: "A" → "A"');
console.assert(capitalize2("z") === "Z", 'Edge Case Failed: "z" → "Z"');

