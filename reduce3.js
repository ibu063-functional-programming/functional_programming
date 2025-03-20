const myArray = [22, 9, 60, 12, 4, 56];
const sum = (x, y) => x + y;
const average = (arr) => arr.reduce(sum, 0) / arr.length;

console.log(average(myArray)); // 27.166667