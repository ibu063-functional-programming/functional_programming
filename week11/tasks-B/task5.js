// ************ TASK DESCRIPTION ************
//? Either-based Conditional Decision

/*
*   You are checking user input for eligibility.
*
*   Write a function `checkAge(age)` that:
*   - Returns Left("Too young") if age < 18
*   - Returns Right(age) otherwise
*   - Allows mapping over Right to transform or log the age
*
*   Use Either monad structure (Left/Right).
*
*? Example:
*? checkAge(20) → Right(20)
*? checkAge(15) → Left("Too young")
*? checkAge(20).map(x => x + 1) → Right(21)
*/

// TODO: Implement checkAge

class Left {
  constructor(value) {
    this.value = value;
  }

  map(_) {
    return this;
  }

  toString() {
    return `Left(${this.value})`;
  }
}

class Right {
  constructor(value) {
    this.value = value;
  }

  map(fn) {
    return new Right(fn(this.value));
  }

  toString() {
    return `Right(${this.value})`;
  }
}

function checkAge(age) {
  return age < 18 ? new Left("Too young") : new Right(age);
}














// Below this comment any modification is prohibited.
module.exports = { checkAge };
