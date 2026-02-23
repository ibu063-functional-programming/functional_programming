// Regular function
function make3(a, b, c) {
  return `${a}:${b}:${c}`;
}

// Curried version
function make3Curried(a) {
  return function(b) {
    return function(c) {
      return `${a}:${b}:${c}`;
    };
  };
}
// Test
const result = make3Curried("A")(2)("Z");
console.log(result);  // Expected output: "A:2:Z"