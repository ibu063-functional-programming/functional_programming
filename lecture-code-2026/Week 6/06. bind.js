//Basic usage of bind to create a new function with a specific this value and 
// pre-set arguments.    
function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}

// Lock in the first argument as "Hello"
const sayHello = greet.bind(null, "Hello");
// Now sayHello only needs the remaining argument
console.log(sayHello("Alice"));   // "Hello, Alice!"
console.log(sayHello("Bob"));     // "Hello, Bob!"

const sayHi = greet.bind(null, "Hi");
console.log(sayHi("Alice"));    // "Hi, Alice!"   
console.log(sayHi("Bob"));       // "Hi, Bob!"
console.log(sayHi("Charlie"));       // "Hi, Charlie!"


// We can also lock in multiple arguments
function add(a, b, c) {
  return a + b + c;
}

const addFrom10 = add.bind(null, 10);      // locks a = 10
addFrom10(2, 3);    // 10 + 2 + 3 = 15

const addFrom10and5 = add.bind(null, 10, 5); // locks a = 10, b = 5
addFrom10and5(3);   // 10 + 5 + 3 = 18

// Bind reduces the length of the function by the number of parameters we have locked. 
// In this case, add has 3 parameters, and we have locked 1 in addFrom10 and 
// 2 in addFrom10and5, so their lengths are 2 and 1 respectively.
function add(a, b, c) { return a + b + c; }

console.log(add.length);                    // 3
console.log(add.bind(null, 1).length);      // 2
console.log(add.bind(null, 1, 2).length);   // 1
console.log(add.bind(null, 1, 2, 3).length); // 0