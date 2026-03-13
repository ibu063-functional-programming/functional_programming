/*
Write a function compose that:
- Takes two functions f and g
- Returns a new function that applies f(g(x))
*/

const compose = (f, g) => x => f(g(x));

const double = x => x * 2; // -> g
const increment = x => x + 1; // -> f

const doubleThanIncrement = compose(increment, double); // increment(double(x))
console.log("Compose: " + doubleThanIncrement(5)); // 11

// The othe way to solve this task: 

function newCompose (f, g) {
    return function (x) {
        return f(g(x));
    }
}

console.log("New Compose: " + newCompose(increment, double)(5));