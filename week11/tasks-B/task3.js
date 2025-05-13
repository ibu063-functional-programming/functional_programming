// ************ TASK DESCRIPTION ************

/*
*   Write a function `getSafeNested(attr)` that:
*   - Accepts a key name
*   - Returns a function that:
*       - Accepts an object
*       - Returns a Result monad (Success or Fail)
*   - Use the Result monad to avoid crashes on missing properties
*
*? Example:
*? const getName = getSafeNested("name");
*? getName({ name: "Zed" }).toString() → "Success(Zed)"
*? getName({}).toString() → "Fail"
*/

// TODO: Implement getSafeNested and Result monad

function getSafeNested(attr) {
  return function (obj) {
    return Result.of(obj[attr]);
  };
}

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

module.exports = { getSafeNested, Result };







// Below this comment any modification is prohibited.
module.exports = { getSafeNested, Result };
