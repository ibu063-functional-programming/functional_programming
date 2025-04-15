// ************ TASK DESCRIPTION ************

// Rewrite the following into *pointfree style* using composition:

/*
*   const isLongWord = (str) => str.length >= 5;
*/

// You may use the following helper functions:
//*     const getLength = (s) => s.length;
//*     const greaterOrEqual = (limit) => (value) => value >= limit;

/*
 * Use the provided `compose` function to define `isLongWord` in pointfree style.
 * 
 * For input: "code"       => output: false
 * For input: "script"     => output: true
 */


// TODO

const getLength = s => s.length;
const greaterOrEqual = limit => value => value >= limit;

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const isLongWord = compose(greaterOrEqual(5), getLength);




















// Below this comment any modification is prohibited. 
module.exports = isLongWord;
