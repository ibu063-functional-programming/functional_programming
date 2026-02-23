function makeGreeting(formatter) {
  return function(name) {
    return "Hello, " + formatter(name);
  };
}

const upper = str => str.toUpperCase();
const greet = makeGreeting(upper);

console.log(greet("john")); // → "Hello, JOHN!"

const exclaim = name => name + "!";
const greetWithExclaim = makeGreeting(exclaim);

const result = greetWithExclaim("Alice");
console.assert(result === "Hello, Alice!", 'Test Failed: Expected "Hello, Alice!"');
console.log("Test Passed: ", result);
