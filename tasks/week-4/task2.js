//Extract Ages from an Array of People

const extractAges = (arr) => arr.map(person => person.age);

// Example usage:
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
];
console.log(extractAges(people)); // Output: [25, 30]

