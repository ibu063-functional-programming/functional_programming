// Helper functions
const getLength = s => s.length;
const greaterThan = limit => value => value > limit;
const compose = (...fns) => input => fns.reduceRight((acc, fn) => fn(acc), input);

// Pointfree implementation
const isLongString = compose(greaterThan(10), getLength);

// Tests
console.log(isLongString("Functional programming")); // true
console.log(isLongString("Short"));                  // false
