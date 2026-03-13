/*
Write a function applyTwice that:
- Takes a function fn and a number x
- Applies the function twice to the value
*/

const applyTwice = (fn, x) => fn(fn(x));

const double = x => x * 2;
console.log(applyTwice(double, 5));