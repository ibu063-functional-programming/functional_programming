function isEven(n) {
  if (n === 0) return true;
  return isOdd(n - 1);
}

function isOdd(n) {
  if (n === 0) return false;
  return isEven(n - 1);
}

console.log(isEven(4)); // true
console.log(isOdd(4));  // false
console.log(isEven(7)); // false
console.log(isOdd(7));  // true

