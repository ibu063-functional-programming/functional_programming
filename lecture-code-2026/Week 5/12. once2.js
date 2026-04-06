function once2(f) {
  let done = false;
  let result;

  return function (...args) {
    if (!done) {
      done = true;
      result = f(...args);
    }
    return result;
  };
}

const initialize = once2(() => {
  console.log("Initializing...");
  return 42;
});

console.log(initialize()); // Logs: "Initializing...", returns 42
console.log(initialize()); // Returns 42, does not log again