// ************ TASK DESCRIPTION ************

// Create a generic curryTwoArgs function that curries any 2-argument function.
// The returned curried function should allow calling one argument at a time.

/*
* function joinWords(first, second) {
*   return `${first} ${second}`;
* }

* const curriedJoin = curryTwoArgs(joinWords);
* const helloTo = curriedJoin("Hello");
* console.log(helloTo("World")); // Hello World
*/


// TODO

function curryTwoArgs(fn) {
    return function(a) {
      return function(b) {
        return fn(a, b);
      };
    };
  }





// Below this comment any modification is prohibited. 
module.exports = curryTwoArgs;
