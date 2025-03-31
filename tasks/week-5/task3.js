/*
Pure Logger Injection
Write addLogging3(fn, logger) and allow passing a custom logger (e.g., JSON-style logging).
Try with a logger that writes logs as { level: "debug", message: "..." }.
*/
// A basic function to wrap
function greet(name) {
  return `Hello, ${name}!`;
}

// HOF with injected logger
function addLogging3(fn, logger = console.log.bind(console)) {
  return (...args) => {
    logger({ level: "debug", message: `entering ${fn.name}(${args.join(", ")})` });
    try {
      const result = fn(...args);
      logger({ level: "debug", message: `exiting ${fn.name} => ${result}` });
      return result;
    } catch (error) {
      logger({ level: "debug", message: `exiting ${fn.name} => threw ${error}` });
      throw error;
    }
  };
}

// Custom JSON-style logger
const jsonLogger = (logObj) => {
  console.log(JSON.stringify(logObj));
};

// Wrap greet with the custom logger
const loggedGreet = addLogging3(greet, jsonLogger);

// Test it
loggedGreet("Alice");

//Output
//{"level":"debug","message":"entering greet(Alice)"}
//{"level":"debug","message":"exiting greet => Hello, Alice!"}

