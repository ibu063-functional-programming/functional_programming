/*
Invert Comparator
Create invert(fn) to reverse the result of a comparison function.
Sort an array of strings in descending alphabetical order using localeCompare.
*/
// Higher-order function to invert comparison result
const invert = (fn) => (...args) => -fn(...args);

// Example data
const words = ["banana", "apple", "mango", "cherry", "grape"];

// Comparator using localeCompare (ascending)
const alphabetical = (a, b) => a.localeCompare(b);

// Use invert to reverse it (descending)
const descending = invert(alphabetical);

// Sort in descending order
const sortedDesc = [...words].sort(descending);

console.log("Descending:", sortedDesc);
//Output
//Descending: [ 'mango', 'grape', 'cherry', 'banana', 'apple' ]

