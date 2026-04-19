// Normal
const double = (x) => x * 2;
console.log(double(5));            // returns 10, then logs

// CPS
const doubleCPS = (x, k) => k(x * 2); // no return, hands result to k
doubleCPS(5, (result) => console.log(result));