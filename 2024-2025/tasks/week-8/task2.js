function powerN(base, exp) {
  if (exp === 0) {
    return 1; // base case: anything^0 = 1
  } else if (exp % 2 === 0) {
    // even exponent
    return powerN(base * base, exp / 2);
  } else {
    // odd exponent
    return base * powerN(base, exp - 1);
  }
}

console.log(powerN(2, 10)); // 1024
console.log(powerN(3, 0));  // 1
console.log(powerN(5, 3));  // 125
console.log(powerN(7, 1));  // 7
