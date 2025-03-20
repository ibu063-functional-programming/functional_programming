// ************ TASK DESCRIPTION ************

// Write a PURE function "doubleArray" that takes an array of numbers and returns an array where each number is doubled.



// TODO
const doubleArray = (arr) => {
    let result = [...arr];
    for (let i = 0; i < result.length; i++) {
        result[i] *= 2;
    }
    return result; 
};






























// Below this comment any modification is prohibited. 
module.exports = doubleArray;