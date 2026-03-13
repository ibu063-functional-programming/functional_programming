/*
Create a counter using an IIFE that:
keeps a private variable count
returns an object with the following methods:
increment() → increases count by 1 and returns it
decrement() → decreases count by 1 and returns it
reset() → resets count to 0 and returns it
The count variable must not be accessible directly from outside.
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset());     // 0
console.log(counter.increment()); // 1
*/

const counter = (function () {
    let count = 0;
    return (
        {
         increment: function() {
            count++;
            return count;
         },
         decrement: function() {
            count--;
            return count;
         },
         reset: function() {
            count = 0;
            return count;
         }   
        }
    )
})();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset());     // 0
console.log(counter.increment()); // 1