function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) { 
      return fn.apply(this, args);  //return fn(...args); //objects person.curr
      //myLog("NORMAL", "System is running smoothly.");
    } else {
      return function (...nextArgs) {
        return curried.apply(this, [...args, ...nextArgs]); //return curried(...args, ...nextArgs);
      };
    }
  };
}
//args = ["NORMAL"]
//nextArgs = ["System is running smoothly."]
// ['NORMAL', 'System is running smoothly.']

function myLog(severity, logText) {
  if (!logText) {
    console.log(`[${severity}]`);
    return;
  }

  switch (severity) {
    case "NORMAL":
      console.log(`[NORMAL] ${logText}`);
      break;
    case "WARNING":
      console.warn(`[WARNING] ${logText}`);
      break;
    case "ERROR":
      console.error(`[ERROR] ${logText}`);
      break;
    default:
      console.log(`[UNKNOWN] ${logText}`);
  }
}

myLog = curry(myLog);

const myNormalLog = myLog("NORMAL");
const myWarningLog = myLog("WARNING");
const myErrorLog = myLog("ERROR");

// Example usage:
myNormalLog("Everything is fine.");
myWarningLog("Careful now!");
myErrorLog("Something went wrong!");


/*
function introduce(greeting, punctuation) {
  return `${greeting}, I'm ${this.name}${punctuation}`;
}

const person = { name: "Alice" }; //person.name
introduce("Hello", "!");  // "Hello, I'm undefined!"

introduce.apply(person, ["Hello", "!"]);  // "Hello, I'm Alice!"
*/