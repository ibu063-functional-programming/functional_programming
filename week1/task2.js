function operate(operation, a, b) {
    return operation(a,b);
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => y !== 0 ? x / y : "Cannot divide by zero";
console.log(operate(add, 5, 3)); // Expected output: 8
console.log(operate(subtract, 10, 7)); // Expected output: 3
