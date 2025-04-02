// Original function
const nonsense = (a, b, c, d, e) => `${a}/${b}/${c}/${d}/${e}`;

// Partially applied function where b = 22 and e = 1960
const fix2and5 = (a, c, d) => nonsense(a, 22, c, d, 1960);

// Test
const result = fix2and5("X", "Y", "Z");
console.log(result); // Expected output: "X/22/Y/Z/1960"
