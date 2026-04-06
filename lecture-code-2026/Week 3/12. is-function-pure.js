const x = {};
x.valueOf = () => Math.random();
console.log(x.valueOf());  // Prints a random number
console.log(x.valueOf());  // Prints a random number
console.log(x.valueOf());  // Prints a random number

const y = 1;
const z = 2;

const sum3 = (a, b, c) => a + b + c;

console.log(sum3(x, y, z)); // Example output: 3.2034400919849431
console.log(sum3(x, y, z)); // Example output: 3.8537045249277906
console.log(sum3(x, y, z)); // Example output: 3.0833258308458734