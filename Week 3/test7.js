const { memoize } = require("./task7.js");

let callCount = 0;

function expensiveFunction(x) {
  callCount++;
  return x * x;
}

const memoExpensive = memoize(expensiveFunction);

console.log(memoExpensive(5));
console.log(memoExpensive(5));
console.log(memoExpensive(5));

console.log("Call count:", callCount);
console.assert(callCount === 1, "Memoization failed: function ran more than once for same input");

console.log("Task 7 memoize task correct");
