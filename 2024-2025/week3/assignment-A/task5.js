// ************ TASK DESCRIPTION ************

// Memoization is an optimization technique that stores computed results 
// to avoid redundant calculations and improve performance. 
// The goal of this task is to implement memoization for the Fibonacci sequence. 

// Note: The function does NOT need to be pure. 
// The focus is on performance optimization, not function purity.

// const fib = n => {
//     if (n === 0) {
//         return 0;
//     }
//     else if (n === 1) {
//         return 1;
//     }
//     else {
//         return fib(n - 2) + fib(n - 1);
//     }
// };

// Implement memoization using a global cache variable.


// TODO

const fib_cache = [];

function fib(n) {
    if (fib_cache[n] !== undefined) return fib_cache[n];
    if (n < 2) fib_cache[n] = n;
    else fib_cache[n] = fib(n - 1) + fib(n - 2);
    return fib_cache[n];

}








































// Below this comment any modification is prohibited.
module.exports = { fib, fib_cache };
