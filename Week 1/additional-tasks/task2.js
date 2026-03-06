/*
Write a higher-order function that takes a function (operation) 
and two numbers (a and b) as arguments, and returns the result of applying the function 
to the numbers. Implement addition, subtraction, multiplication, and division using this function.
*/

function operate(operation, a, b) {
    return operation(a, b);
}
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => y !== 0 ? x / y : 'Cannot divide by zero';

console.log(operate(add, 5, 3)); // 8