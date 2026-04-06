["123.45", "-67.8", "90"].map(parseInt); // [123, NaN, NaN]
const unary = fn => (...args) => fn(args[0]);
["123.45", "-67.8", "90"].map(unary(parseInt)); // [123, -67, 90]


const binary = fn => (...a) => fn(a[0], a[1]);
const ternary = fn => (...a) => fn(a[0], a[1], a[2]);

const arity = (n, fn) => (...args) => fn(...a.slice(0, n));

const unary1 = fn => arity(1, fn);
const binary1 = fn => arity(2, fn);
const ternary1 = fn => arity(3, fn);

console.log(parseInt.length); // 2