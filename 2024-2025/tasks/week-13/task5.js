function double(x) {
  return x * 2;
}

function addOne(x) {
  return x + 1;
}

function transformArray(arr) {
  return arr.map(x => addOne(double(x)));
}

const result = transformArray([2, 3]);
console.assert(JSON.stringify(result) === JSON.stringify([5, 7]), 'Test Failed: Expected [5, 7]');
console.log("Test Passed: transformArray([2, 3]) →", result);
