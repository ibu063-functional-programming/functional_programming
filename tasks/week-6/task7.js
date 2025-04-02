// 1. Original function
function make3(a, b, c) {
  return `${a}:${b}:${c}`;
}

// 2. Closure-based partial currying
function partialCurryByClosure(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
}

// 3. Test cases
const curried = partialCurryByClosure(make3);

console.log(curried("A")(2)("Z"));         // "A:2:Z"
console.log(curried("X", 1)("Y"));         // "X:1:Y"
console.log(curried("Q", 3, "W"));         // "Q:3:W"
