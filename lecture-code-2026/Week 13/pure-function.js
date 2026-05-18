// A pure function: it depends only on its inputs and has no side effects.
function square(x) {
  return x * x;
}
// Using a test assertion (for illustration; in practice use a testing framework's assert):
console.assert(square(3) === 9, 'square(3) should equal 9');
console.assert(square(3) === 9, 'square called again with 3 still equals 9');  // same input, same output

console.assert(square(-4) === 16, 'square(-4) should equal 16');