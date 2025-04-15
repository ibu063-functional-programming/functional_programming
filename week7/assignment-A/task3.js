// ************ TASK DESCRIPTION ************

// Rewrite the following into *pointfree style*:

/*
*   const isShortString = (str) => str.length < 8;
*/

// You may use the following helper functions:
//*     const getLength = (s) => s.length;
//*     const lessThan = (limit) => (value) => value < limit;


// For input: "Hello"       => output: true
// For input: "JavaScript"  => output: false


// TODO

const getLength = s => s.length; // ove dvije izbaciti jer su vec u komentaru
const lessThan = limit => value => value < limit;

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const isShortString = compose(lessThan(8), getLength);


console.log(isShortString("Hello"));      
console.log(isShortString("JavaScript")); 


























// Below this comment any modification is prohibited. 
module.exports = isShortString;
