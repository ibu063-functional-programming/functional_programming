/*
Write a function divide in continuation-passing style:
Takes x, y
Takes two callbacks: onSuccess, onError
If y === 0, call onError
Otherwise call onSuccess(x / y)
Hint: Do not use return.
*/

function divide (x, y, onSuccess, onError) {
    if (y === 0) {
        onError("Error: Division by zero");
    } else { 
        onSuccess(x / y);
    }
}
divide(10, 2, console.log, console.log);
divide(10, 0, console.log, console.log);


