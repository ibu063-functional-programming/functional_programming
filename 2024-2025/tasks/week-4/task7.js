//Find First String Longer than X Characters
const findLongWord = (words, minLength) => words.find(word => word.length > minLength);

// Example usage:
console.log(findLongWord(["apple", "banana", "cherry"], 5)); // Output: "banana"

