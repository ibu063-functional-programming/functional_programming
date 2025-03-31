/*
Add Logging
Write a function greet(name) that returns "Hello, name!".
Create a higher-order function addLogging(fn) that wraps greet and logs arguments and return values.
Test it with greet("Alice").
*/
// Base function
function greet(name) {
  return `Hello, ${name}!`;
}
// Higher-order function to add logging
function addLogging(fn) {
  return (...args) => {
    console.log(`entering ${fn.name}(${args.join(", ")})`);
    const result = fn(...args);
    console.log(`exiting ${fn.name} => ${result}`);
    return result;
  };
}
// Wrap greet with logging
const loggedGreet = addLogging(greet);
// Test the wrapped function
loggedGreet("Alice");

//Output
/*
entering greet(Alice)
exiting greet => Hello, Alice!
*/

