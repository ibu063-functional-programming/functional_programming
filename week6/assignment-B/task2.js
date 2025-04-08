// ************ TASK DESCRIPTION ************

// Create a function autoPartial(obj) that takes an object with functions,
// and returns a new object where each function supports partial application
// by fixing the first few arguments.

/*
* const tools = {
*   greet: (a, b) => `${a}, ${b}!`,
*   multiply: (x, y) => x * y,
* };

* const partialTools = autoPartial(tools);
* const greetHello = partialTools.greet("Hello");
* console.log(greetHello("world")); // Hello, world!
*/


function autoPartial(obj) {
  const result = {};

  for (const key in obj) {
    if (typeof obj[key] === "function") {
      result[key] = function (...presetArgs) {
        return function (...laterArgs) {
          return obj[key](...presetArgs, ...laterArgs);
        };
      };
    }
  }

  return result;
}




// Below this comment any modification is prohibited. 
module.exports = autoPartial;