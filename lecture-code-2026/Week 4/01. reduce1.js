const myArray = [22, 9, 60, 12, 4, 56];
const sum = (x, y) => x + y;
const mySum = myArray.reduce(sum, 0); // 163
/*sum = 0
sum = 0 + 22 = 22
sum = 22 + 9 = 31
sum = 31 + 60 = 91
sum = 91 + 12 = 103
sum = 103 + 4 = 107
sum = 107 + 56 = 163
*/
console.log(mySum); // Output: 163
/*
let sum = 0
for (let i = 0; i < myArray.length; i++) {
  sum += myArray[i];
}

console.log(sum); // Output: 163
*/