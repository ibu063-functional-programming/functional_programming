// ************ TASK DESCRIPTION ************

// Write a function areAllPositive(arr) that returns true 
// if all numbers in the array are positive. 
// USE DECLARATIVE PROGRAMMING.

/*
* console.log(areAllPositive([3, 5, 7])); // Output: true
* console.log(areAllPositive([3, -5, 7])); // Output: false
*/


// TODO
const areAllPositive = (arr) => arr.every(num => num > 0);

































// Below this comment any modification is prohibited. 
module.exports = areAllPositive;