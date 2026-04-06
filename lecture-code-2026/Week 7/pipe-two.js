const pipeTwo = (f, g) => (...args) => g(f(...args));

const add = (x, y) => x + y;
const square = x => x * x;

const addThenSquare = pipeTwo(add, square);

console.log(addThenSquare(2, 3)); // (2 + 3)² = 25