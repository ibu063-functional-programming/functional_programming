function makeMultiplier(factor) {
  return function(x) {
    return x * factor;
  };
}
const triple = makeMultiplier(3);
console.assert(triple(5) === 15, "triple function should multiply by 3");