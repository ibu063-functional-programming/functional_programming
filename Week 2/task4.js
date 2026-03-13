//Write a function "sumAll" using rest parameters that takes 
//ANY number of arguments and returns their sum.

function sumAll(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}

console.log(sumAll(1, 2, 3, 4)); //10

function average(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0; // or null/undefined as desired
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}

// Usage
const nums = [10, 20, 30, 40];
console.log(average(nums)); // 25