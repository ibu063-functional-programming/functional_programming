const Monad = require('./monad.cjs');

class Either extends Monad {
  static of(left, right) {
    return right === undefined || right === null
      ? new Left(left)
      : new Right(right);
  }

  isLeft() {
    throw new Error("isLeft() must be implemented by subclasses");
  }
}

class Left extends Monad {
  isLeft() {
    return true;
  }

  map(_) {
    return this; // No mapping occurs on Left
  }
}

class Right extends Monad {
  isLeft() {
    return false;
  }

  map(fn) {
    return Either.of(null, fn(this.x));
  }
}

const either = Either.of(null, "Success"); // Right("Success")
const eitherError = Either.of("Error", null); // Left("Error")

console.log(either);
console.log(eitherError)

module.exports = Either;