/*
Demethodize
Implement demethodize1(fn).
Use it to convert Array.prototype.map into a function that works on any array.
*/
const demethodize1 = (fn) => (obj, ...args) => fn.apply(obj, args);

// Example: use Array.prototype.map as a function
const map = demethodize1(Array.prototype.map);
const toUpperCase = (s) => s.toUpperCase();

const result = map(["hello", "world"], toUpperCase);
console.log(result); // ["HELLO", "WORLD"]

