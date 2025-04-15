// ************ TASK DESCRIPTION ************

// Process a given array of integers with the following **pipeline**:

/*
 ?      Filter numbers greater than 10
 ?      Double each remaining number
 ?      Calculate the sum

 ?      Use tap (or a custom debug function) to log intermediate steps.
*/

// Input array: [5, 12, 8, 20, 3, 15]

// Expected output: *PAY ATTENTION TO THE FORMAT OF THE LOGS AS THOSE ARE TESTED AS WELL*
//* Greater than 10: [12, 20, 15]  
//* Doubled: [24, 40, 30]  
//* Sum: 94  

// TODO

// if opted for the tap function, you have the boilerplate code below:
const tap = label => x => {
  console.log(`${label}:`, x);
  return x;
};

const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x);

// TODO finish the sum function below:
const sum = arr => arr.reduce((a, b) => a + b, 0);

const process = pipe(
  arr => arr.filter(x => x > 10),
  tap("Greater than 10"),
  arr => arr.map(x => x * 2),
  tap("Doubled"),
  arr => {
    const result = sum(arr);
    console.log("Sum:", result);
    return result;
  }
);























// Below this comment any modification is prohibited. 
module.exports = process;