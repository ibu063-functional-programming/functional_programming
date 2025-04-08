// ************ TASK DESCRIPTION ************

// Write a function flexCurry(fn) that curries any function of any arity.
// It should keep returning functions until enough arguments are collected.

/*
  
  function sum5(a, b, c, d, e) {
    return a + b + c + d + e;
  }

*  const curriedSum = flexCurry(sum5);
*  console.log(curriedSum(1)(2)(3)(4)(5));      // 15
*  console.log(curriedSum(1, 2)(3, 4, 5));      // 15
*/


// TODO

// ** Solution **
function flexCurry(fn, ...args) {
    return (...newArgs) => {
      const allArgs = [...args, ...newArgs];
      return allArgs.length >= fn.length
        ? fn(...allArgs)
        : flexCurry(fn, ...allArgs);
    };
  }

  











 




// Below this comment any modification is prohibited. 
module.exports = flexCurry;
