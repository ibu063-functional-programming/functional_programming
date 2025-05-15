// Imperative version
function filterOddsImperative(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) result.push(arr[i]);
  }
  return result;
}

// Functional version
const filterOddsFunctional = arr => arr.filter(x => x % 2 === 0);

//Test Cases
const input = [1, 2, 3, 4, 5, 6];
const expected = [2, 4, 6];

console.assert(
  JSON.stringify(filterOddsImperative(input)) === JSON.stringify(expected),
  "Test Failed: Imperative version did not return [2, 4, 6]"
);

console.assert(
  JSON.stringify(filterOddsFunctional(input)) === JSON.stringify(expected),
  "Test Failed: Functional version did not return [2, 4, 6]"
);

console.log("Tests Passed: Both implementations return [2, 4, 6]");
