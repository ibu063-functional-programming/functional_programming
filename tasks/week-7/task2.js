// Function definitions
const trimSpaces = str => str.trim();
const toUpper = str => str.toUpperCase();
const addExclamation = str => `${str}!`;

// Compose utility (right-to-left)
const compose = (...fns) => input => fns.reduceRight((acc, fn) => fn(acc), input);

// Compose setup
const excitedGreeting = compose(addExclamation, toUpper, trimSpaces);

// Test composition
console.log(excitedGreeting("  hello world  "));  // Expected output: "HELLO WORLD!"
