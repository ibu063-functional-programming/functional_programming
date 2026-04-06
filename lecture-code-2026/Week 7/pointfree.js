//const double = x => x * 2;

const multiply = x => y => x * y;
const double = multiply(2); // still works as double(x)
console.log(double(3)); // 6
console.log(double(10)); // 20
