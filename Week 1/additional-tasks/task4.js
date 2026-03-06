/*
Implement a counter function using closures. The counter should:
Start at zero.
Increment when called.
Return the updated count.
*/

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
