// ************ TASK DESCRIPTION ************
//? Async Try Monad

/*
*   You are dealing with async functions that might reject or throw errors.
*
*   Implement an async version: `AsyncTry.of(asyncFn, errorMsg)`
*
*   - Accepts a function that returns a Promise
*   - Resolves to Right(result) if successful
*   - Resolves to Left(errorMsg) if it throws or rejects
*
*   Use Either monad structure from previous tasks.
*
*? Example:
*? await AsyncTry.of(() => Promise.resolve(42), "Failed") → Right(42)
*? await AsyncTry.of(() => Promise.reject(), "Failed") → Left("Failed")
*/

// TODO: Implement AsyncTry

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

const AsyncTry = {
  of: async (fn, errorMsg) => {
    try {
      const result = await fn();
      return new Right(result);
    } catch (_) {
      return new Left(errorMsg);
    }
  }
};












// Below this comment any modification is prohibited.
module.exports = { AsyncTry };
