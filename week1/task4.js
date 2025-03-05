function createCounter() {
    let count = 1;
    return function() {
        return count++; // Update and return the count
    };
}
const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3