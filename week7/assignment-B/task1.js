// ************ TASK DESCRIPTION ************

// Implement three functions:
//  removeVowels(str) – removes all vowels from a string (a, e, i, o, u)
//  reverse(str) – reverses the string
//  addPeriod(str) – adds a period (".") to the end of the string

/*
*   Use pipelining to create a new function that performs these operations *in order*:
*   removeVowels, then reverse, then addPeriod.
*/

// TODO -> create functions
const removeVowels = str => str.replace(/[aeiou]/gi, '');
const reverse = str => str.split('').reverse().join('');
const addPeriod = str => str + '.';

const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x);

// TODO -> create the "transform" function
const transform = pipe(removeVowels, reverse, addPeriod);























// Below this comment any modification is prohibited. 
module.exports = transform;
