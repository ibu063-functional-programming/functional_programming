// ************ TASK DESCRIPTION ************

// Create a generic curry2f function that curries any two-argument function from left to right.

/*
    Usage example:
* const curriedAnnounce = curry1(announce);
* const annaAnnounce = curriedAnnounce("Anna");
* console.log(annaAnnounce("teaching")); // Anna is teaching
*/

// TODO

function announce(who, action) {
  return `${who} is ${action}`;
}

function curry2f(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

// Below this comment any modification is prohibited. 
module.exports = curry2f;