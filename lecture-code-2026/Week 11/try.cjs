const Either = require('./either.cjs');

class Try {
  static of(fn, msg) {
    try {
      const result = fn();
      return Either.of(null, result); // returns a Right
    } catch (e) {
      return Either.of(msg || e.message, null); // returns a Left
    }
  }
}

const getField2 = (attr) => (obj) =>
  Try.of(() => obj[attr], "NULL OBJECT");

const x = getField2("somefield")(null);
console.log(x.isLeft()); // true
console.log(x.toString()); // Left(NULL OBJECT)

