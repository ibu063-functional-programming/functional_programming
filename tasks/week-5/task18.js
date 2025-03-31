/*
Methodize
Create methodize(obj, fn) to add a method to an object.
Implement a reverse(str, dashed) function and add it to String.prototype 
so you can call "ABC".reverse(true).
*/
// Function to methodize
function reverse(str, dashed = false) {
  return str.split("").reverse().join(dashed ? "-" : "");
}

// Add to String.prototype
function methodize(obj, fn) {
  obj.prototype[fn.name] = function (...args) {
    return fn(this, ...args);
  };
}

methodize(String, reverse);

// Test
console.log("hello".reverse());         // "olleh"
console.log("hello".reverse(true));     // "o-l-l-e-h"

