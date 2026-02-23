// 1. Original function
function nonsense(a, b, c, d, e) {
  return `${a}/${b}/${c}/${d}/${e}`;
}

// 2. partialCurry using .bind()
function partialCurry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      // Bind current args and return a new function waiting for the rest
      const boundFn = fn.bind(null, ...args);
      return partialCurry(boundFn);
    }
  };
}

// 3. Test with partial steps
const pc = partialCurry(nonsense); // returns curried function
const f1 = pc(9, 22);              // provides a, b
const f2 = f1(60);                 // provides c
const result = f2(12, 4);          // provides d, e

console.log(result);               // Expected output: "9/22/60/12/4"
