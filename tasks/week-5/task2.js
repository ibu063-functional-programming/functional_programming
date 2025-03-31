/*
Add Logging with Exception Handling
Modify your addLogging to addLogging2(fn) using try-catch.
Wrap a divide(a, b) function that throws an error if b === 0.
*/
// Function that may throw
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Higher-order function with exception-safe logging
function addLogging2(fn) {
  return (...args) => {
    console.log(`entering ${fn.name}(${args.join(", ")})`);
    try {
      const result = fn(...args);
      console.log(`exiting ${fn.name} => ${result}`);
      return result;
    } catch (error) {
      console.log(`exiting ${fn.name} => threw ${error}`);
      throw error;
    }
  };
}

// Wrap the divide function
const safeDivide = addLogging2(divide);

// Test successful division
safeDivide(10, 2);  // should log and return 5

// Test division by zero
try {
  safeDivide(10, 0); // should log the exception
} catch (e) {
  console.log("Caught error:", e.message);
}
//Output
/*
entering divide(10, 2)
exiting divide => 5
entering divide(10, 0)
exiting divide => threw Error: Cannot divide by zero
Caught error: Cannot divide by zero
*/

