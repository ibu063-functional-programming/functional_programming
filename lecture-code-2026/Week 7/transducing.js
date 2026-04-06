const testOdd = x => x % 2 === 1;
const testUnderFifty = x => x < 50;
const duplicate = x => x + x;
const addThree = x => x + 3;

const myArray = [22, 9, 60, 24, 11, 63];

const a0 = myArray
  .filter(testOdd)          // [9, 11, 63]
  .map(duplicate)           // [18, 22, 126]
  .filter(testUnderFifty)   // [18, 22]
  .map(addThree);           // [21, 25]

console.log(a0); // [21, 25]