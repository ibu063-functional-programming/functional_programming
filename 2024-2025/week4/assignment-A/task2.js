// ************ TASK DESCRIPTION ************

// Given an array of objects representing people, write a function extractNames(arr) 
// that returns an array containing only the names.
// USE DECLARATIVE PROGRAMMING.

/*
*  const people = [
*       { name: "Alice", age: 25 },
*       { name: "Bob", age: 30 },
*   ];
*   console.log(extractNames(people)); // Output: ["Alice", "Bob"]
*/


// TODO
const extractNames = (arr) => arr.map(person => person.name);

































// Below this comment any modification is prohibited. 
module.exports = extractNames;