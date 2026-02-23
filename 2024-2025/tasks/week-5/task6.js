/*
Multi-Argument Memoization
Write memoize3(fn) that works for any number/type of arguments using JSON.stringify().
Test it with a function sum(a, b) and ensure repeated calls are cached.
*/
// Multi-argument memoization
function memoize3(fn) {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log(`Cache hit for args: ${key}`);
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Sample multi-arg function
function sum(a, b) {
  console.log(`Computing sum(${a}, ${b})`);
  return a + b;
}

// Wrap with memoization
const memoizedSum = memoize3(sum);

// Test calls
console.log(memoizedSum(5, 7)); // computes
console.log(memoizedSum(5, 7)); // cached
console.log(memoizedSum(2, 3)); // computes
console.log(memoizedSum(2, 3)); // cached

//Output
/*
Computing sum(5, 7)
12
Cache hit for args: [5,7]
12
Computing sum(2, 3)
5
Cache hit for args: [2,3]
5
*/

