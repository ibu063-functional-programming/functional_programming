// Original function
function make3(a, b, c) {
  return `${a}:${b}:${c}`;
}

// Partial application function using closures
function partial(fn) {
  return function partiallyApplied(...presetArgs) {
    return function(...laterArgs) {
      let finalArgs = [];
      let laterIndex = 0;

      for (let i = 0; i < presetArgs.length; i++) {
        if (presetArgs[i] === undefined) {
          finalArgs.push(laterArgs[laterIndex++]);
        } else {
          finalArgs.push(presetArgs[i]);
        }
      }

      // If there are remaining args (e.g. for make3, we might call with only a and b fixed first)
      finalArgs = finalArgs.concat(laterArgs.slice(laterIndex));
      
      return fn(...finalArgs);
    };
  };
}

// Test case
const f0 = partial(make3);
const f1 = f0(undefined, 2);
const result = f1("X", "Y");

console.log(result); // Expected output: "X:2:Y"
