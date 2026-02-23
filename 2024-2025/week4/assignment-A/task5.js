// ************ TASK DESCRIPTION ************

// Write a function flattenAndSum(arr) that flattens a nested array (depth = 2) 
// and returns the sum of all numbers. 
// USE DECLARATIVE PROGRAMMING. 

// * console.log(flattenAndSum([[1, 2], [3, 4, [5, 6]], 7])); // Output: 28


// TODO
const flattenAndSum = (arr) => arr.flat(2).reduce((sum, num) => sum + num, 0);












































// Below this comment any modification is prohibited.
module.exports = flattenAndSum;
