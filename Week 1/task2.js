/*
Create a function oddOrEven that takes one number as a parameter. 
The function should check if that number is odd or even. 
If the number is even, add 24 to it and return a new number, and if it is odd return it as it is. 
*/

function oddOrEven(number) {
    if (number % 2 != 0) {
        return number;
    } else {
        return number + 24;
    }
}

console.log(oddOrEven(7));
console.log(oddOrEven(32));

const oddOrEvenArrow = (number) => (number % 2 != 0 ? number : number + 24);

console.log(oddOrEvenArrow(7));
console.log(oddOrEvenArrow(32));