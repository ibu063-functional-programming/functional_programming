// ************ TASK DESCRIPTION ************

// Create a curried function filterCondition(key)(value)
// that returns a function that accepts an object and checks if the object's key matches the value.

/*
* const filterByType = filterCondition("type")("admin");
* console.log(filterByType({ type: "admin", name: "John" })); // true
* console.log(filterByType({ type: "user", name: "Jane" }));  // false
*/


// TODO


function filterCondition(key) {
    return function(value) {
      return function(obj) {
        return obj[key] === value;
      };
    };
  }
  
  module.exports = filterCondition;
  











// Below this comment any modification is prohibited.
module.exports = filterCondition;
