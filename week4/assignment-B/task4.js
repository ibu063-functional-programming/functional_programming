// ************ TASK DESCRIPTION ************

// Write a function findFirstNegativeIndex(arr) that returns 
// the index of the first negative number in the array. If none exist, return -1. 
// USE DECLARATIVE PROGRAMMING.


//* console.log(findFirstNegativeIndex([5, 10, -3, 20])); // Output: 2
//* console.log(findFirstNegativeIndex([5, 10, 20])); // Output: -1



// TODO
const findFirstNegativeIndex = (arr) => arr.findIndex(num => num < 0);































// Below this comment any modification is prohibited. 
module.exports = findFirstNegativeIndex;