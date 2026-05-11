function curry(fn) {
  return function curried(...args) {
    return args.length >= fn.length
      ? fn(...args)
      : (...next) => curried(...args, ...next);
  };
}


// sum3C :: Number → Number → Number → Number
const sum3C = curry(
 (a, b, c) => a + b + c
);
console.log(sum3C(1, 2, 3))

// sum3 :: (Number, Number, Number) → Number
const sum3 = (a, b, c) => a + b + c;
console.log(sum3(1, 2, 3))

// sum3Cv2 :: Number → (Number → (Number → (Number)))
const sum3Cv2 = curry(
 (a, b, c) => a + b + c
);
console.log(sum3Cv2(1, 2, 3))