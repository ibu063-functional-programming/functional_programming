// ************ TASK DESCRIPTION ************

// Implement three functions:
//  increment(x) – adds 1 to a number
//  triple(x) – multiplies the number by 3
//  negate(x) – returns the negative of the number

/*
*   Use pipelining to create a new function that performs these operations *in order*: increment, then triple, then negate.
*/


// TODO -> create functions

const increment = x => x + 1;
const triple = x => x * 3;
const negate = x => -x;

const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x);

// TODO -> create the "transform" function

const transform = pipe(increment, triple, negate);

console.log(transform(4)); // -15






















// Below this comment any modification is prohibited. 
module.exports = transform;