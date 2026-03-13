/*
Create an IIFE that:
Initializes a private variable count = 0
Returns a function that increments and returns count
counter(); // 1
counter(); // 2
*/

const counter = (function() {
    let count = 0; 
    return function() {
        count++;
        return count;
    }
})();

console.log(counter()); // 1
console.log(counter()); // 2