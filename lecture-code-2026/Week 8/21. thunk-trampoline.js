//Sum numbers from n to 0 

// 1. RECURSION
const sum = (n) =>
  n === 0 ? 0 : n + sum(n - 1);

console.log(sum(5));       // 15 ✓
console.log(sum(100000));  // RangeError: Maximum call stack size exceeded


// 2. TRAMPOLINE
const trampoline = fn => {
  while (typeof fn === "function") fn = fn();
  return fn;
};

const sumT = (n, acc = 0) =>
  n === 0 ? acc : () => sumT(n - 1, acc + n);
//              ↑ returns a THUNK instead of calling itself

console.log(trampoline(sumT(5)));       // 15 ✓
console.log(trampoline(sumT(100000)));  // 5000050000 ✓ no overflow!

/*
sumT(4, 5)
sumT(3, 9)
sumT(2, 12)
sumT(1, 14)
sumT(0, 15) => 15
*/