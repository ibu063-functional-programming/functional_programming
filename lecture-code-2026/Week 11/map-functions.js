// Function.map :: (a → b) ⇝ (b → c) → (a → c)
Function.prototype.map = function (fn) {
  return (x) => fn(this(x));
};

const plus1 = (x) => x + 1;
const times10 = (y) => 10 * y;
console.log(plus1.map(times10)(3));
// 40: first add 1 to 3, then multiply by 10

