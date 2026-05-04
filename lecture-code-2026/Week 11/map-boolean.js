// Boolean.map :: Boolean ⇝ (Boolean → a) → Boolean
Boolean.prototype.map = function (fn) {
  return !!fn(this.valueOf());
};
const result = true.map(x => !x); // false
console.log(result); // false

