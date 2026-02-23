/*
Run Once
Create once(fn) and once2(fn) and test with an initializer function.
Call it multiple times and verify it only runs once.
*/
// once: runs once, ignores all subsequent calls
function once(fn) {
  let called = false;
  return (...args) => {
    if (!called) {
      called = true;
      fn(...args);
    }
  };
}

// once2: runs once, stores and returns the result on every call
function once2(fn) {
  let called = false;
  let result;
  return (...args) => {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

// Example initializer
const initialize = () => {
  console.log("Initializing system...");
  return 42;
};

// Tests
const initOnce = once(initialize);
initOnce();  // logs
initOnce();  // does nothing

console.log("----");

const initOnce2 = once2(initialize);
console.log("Return 1:", initOnce2());  // logs + returns 42
console.log("Return 2:", initOnce2());  // just returns 42
//Output
/*
Initializing system...
----
Initializing system...
Return 1: 42
Return 2: 42
*/

