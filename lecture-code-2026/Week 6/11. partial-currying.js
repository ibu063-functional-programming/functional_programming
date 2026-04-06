function partialCurry(fn) {
  return fn.length === 0
    ? fn()
    : (...x) => partialCurry(fn.bind(null, ...x));
}

/*
function curry(fn) {
    return fn.length === 0 
      ? fn() 
      : (x) => curry(fn.bind(null, x));
}
*/

const nonsense = (a, b, c, d, e) =>  `${a}/${b}/${c}/${d}/${e}`;
const pcNonsense = partialCurry(nonsense);
const fix1And2 = pcNonsense(9, 22); // fix1And2 is now a ternary function
const fix3 = fix1And2(60); // fix3 is a binary function
const fix4and5 = fix3(12, 4); // fix4and5 === nonsense(9,22,60,12,4), "9/22/60/12/4"

console.log(fix1And2);
console.log(fix3);
console.log(fix4and5);