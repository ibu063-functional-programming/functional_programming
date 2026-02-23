// ************ TASK DESCRIPTION ************

// Memoization is an optimization technique that stores computed results 
// to avoid redundant calculations and improve performance. 
// The goal of this task is to implement memoization for the Fibonacci sequence. 

// Note: The function does NOT need to be pure. 
// The focus is on performance optimization, not function purity.

// function factorial(n) {
//     if (n === 0 || n === 1){
//         return 1;
//     }
//     return n * factorial(n - 1);
// }



// TODO

const fact_cache = [];

function factorial(n) {
    if (fact_cache[n] !== undefined) return fact_cache[n];
    if (n === 0 || n === 1) fact_cache[n] = 1;
    else fact_cache[n] = n * factorial(n - 1);
    return fact_cache[n];
}

























// Below this comment any modification is prohibited.
module.exports = { factorial, fact_cache };