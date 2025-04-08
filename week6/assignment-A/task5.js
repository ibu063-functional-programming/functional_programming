// ************ TASK DESCRIPTION ************

// Create a curried function conditionBuilder(field)(operator)(value)
// that returns an object representing a condition (like you'd use in a filter system or a database query).

// Then, use partial application to fix the field or operator and reuse the function.

/*
* Expected usage:
const ageEquals = conditionBuilder("age")("=");
console.log(ageEquals(30)); //output_: { field: "age", operator: "=", value: 30 }
*/



// TODO

function conditionBuilder(field) {
    return function(operator) {
      return function(value) {
        return { field, operator, value };
      };
    };
  }
  









































// Below this comment any modification is prohibited.
module.exports = conditionBuilder;
