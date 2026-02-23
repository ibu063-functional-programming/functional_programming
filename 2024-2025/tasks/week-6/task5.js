// 1. Original logging function
function myLog(severity, logText) {
  const tag = `[${severity}]`;

  switch (severity) {
    case "NORMAL":
      console.log(`${tag} ${logText}`);
      break;
    case "WARNING":
      console.warn(`${tag} ${logText}`);
      break;
    case "ERROR":
      console.error(`${tag} ${logText}`);
      break;
    default:
      console.log(`${tag} ${logText}`);
  }
}

// 2. Curry function that supports partial application with rest parameters
function curry(fn) {
  return function curried(...args) {
    // If enough arguments are provided, call the original function
    if (args.length >= fn.length) {
      return fn(...args);
    }
    // Otherwise return a partially applied function
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
}

// 3. Create curried versions of myLog
const curriedLog = curry(myLog);

const myNormalLog = curriedLog("NORMAL");
const myWarningLog = curriedLog("WARNING");
const myErrorLog = curriedLog("ERROR");

// 4. Use them
myNormalLog("All systems go.");     // [NORMAL] All systems go.
myWarningLog("Low battery.");       // [WARNING] Low battery.
myErrorLog("System failure.");      // [ERROR] System failure.
