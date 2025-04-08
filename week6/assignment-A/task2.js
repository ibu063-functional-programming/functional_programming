// ************ TASK DESCRIPTION ************

// Create an autoCurry(obj) function that takes an object with functions 
// and returns a new object where all functions are curried (based on their fn.length).

  /*
  * const utils = {
  * join3: (a, b, c) => `${a}-${b}-${c}`,
  * add2: (x, y) => x + y,
  * };

  * const curriedUtils = autoCurry(utils);
  * console.log(curriedUtils.join3("A")("B")("C"));  // A-B-C
  * console.log(curriedUtils.add2(5)(7));            // 12
  * 
*/



function flexCurry(fn, ...args) {
    return (...newArgs) => {
      const allArgs = [...args, ...newArgs];
      return allArgs.length >= fn.length
        ? fn(...allArgs)
        : flexCurry(fn, ...allArgs);
    };
  }
  
  function autoCurry(obj) {
    const result = {};
    for (const key in obj) {
      if (typeof obj[key] === "function") {
        result[key] = flexCurry(obj[key]);
      }
    }
    return result;
  }
  






























// Below this comment any modification is prohibited. 
module.exports = autoCurry;