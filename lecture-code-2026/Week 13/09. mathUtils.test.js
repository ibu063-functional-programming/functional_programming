// mathUtils.test.js
const { square, double, addOne, processNumbers } = require('./08. mathUtils.cjs');
test('square computes the square of a number', () => {
  expect(square(3)).toBe(9);
  expect(square(-4)).toBe(16);
});

test('double and addOne compose correctly in processNumbers', () => {
  const nums = [1, 2, 3];
  const result = processNumbers(nums);
  expect(result).toEqual([3, 5, 7]); // 1*2+1 =3, 2*2+1=5, 3*2+1=7
  // Ensure original array not mutated (immutability check)
  expect(nums).toEqual([1, 2, 3]);
});

/*
run following to execute test: 
npm install --save-dev jest
add this to package.json:
"scripts": {
  "test": "jest"
}
then run:
npm test 09. mathUtils.test.js 
npm test -- --watch 09.\ mathUtils.test.js (for watch mode)
*/
