// ************ TASK DESCRIPTION ************

/*
*   You are building a Result monad similar to Maybe.
*
*   Implement the following:
*   - A `Result` class with a static `of(x)` method:
*       - Returns `Success(x)` if x is not null/undefined
*       - Returns `Fail()` otherwise
*   - `Success(x)` should:
*       - Support `.map(fn)` to transform the value
*       - Implement `toString()` → Success(value)
*   - `Fail()` should:
*       - Ignore `.map(fn)` and return itself
*       - Implement `toString()` → Fail
*
*? Example:
*? Result.of(5).map(x => x * 2).toString() → "Success(10)"
*? Result.of(null).map(x => x * 2).toString() → "Fail"
*/

// TODO: Implement Result, Success, and Fail

class Result {
  static of(x) {
    return x === null || x === undefined ? new Fail() : new Success(x);
  }
}

class Success {
  constructor(value) {
    this.value = value;
  }

  map(fn) {
    return new Success(fn(this.value));
  }

  toString() {
    return `Success(${this.value})`;
  }
}

class Fail {
  map(_) {
    return this;
  }

  toString() {
    return "Fail";
  }
}








// Below this comment any modification is prohibited.
module.exports = { Result, Success, Fail };
