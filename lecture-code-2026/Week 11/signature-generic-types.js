function curry(fn) {
  return function curried(...args) {
    return args.length >= fn.length
      ? fn(...args)
      : (...next) => curried(...args, ...next);
  };
}

// map :: [a] → (a → b) → [b]
const map = curry((arr, fn) => arr.map(fn));

console.log(map([1, 2, 3], x => x * 2)); 