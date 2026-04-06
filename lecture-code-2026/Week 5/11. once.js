function once(f) {
  let done = false;
  return function (...args) {
    if (!done) {
      done = true;
      f(...args);
    }
  };
}
const greet = once((name) => {
  console.log(`Hello, ${name}!`);
});
greet("Alice"); // Prints: Hello, Alice!
greet("Bob");   // Does nothing