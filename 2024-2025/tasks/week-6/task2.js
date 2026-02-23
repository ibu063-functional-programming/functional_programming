// Original function
function make3(a, b, c) {
  return `${a}:${b}:${c}`;
}

// Curry function using .bind()
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return curried.bind(null, ...args);
    }
  };
}

// Use curry on make3
const f1 = curry(make3); // returns a curried version
const f2 = f1("A");      // returns a function expecting b and c
const f3 = f2(2);        // returns a function expecting c
const result = f3("Z");  // returns "A:2:Z"

console.log(result);     // Expected output: "A:2:Z"
