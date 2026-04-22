// Normal
const double = (x) => x * 2;
console.log(double(5));            // returns 10, then logs

// CPS
const doubleCPS = (x, fn) => fn(x * 2); // no return, hands result to k
doubleCPS(5, (result) => console.log(result));

//fn = (result) => console.log(result);