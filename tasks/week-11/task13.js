// Base Either class
class Either {
  static of(left, right) {
    return right === null || right === undefined
      ? new Left(left)
      : new Right(right);
  }

  map(_) {
    throw new Error("map() must be implemented by subclasses");
  }

  isLeft() {
    throw new Error("isLeft() must be implemented by subclasses");
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return `${this.constructor.name}(${this.value})`;
  }
}

// Left class: represents failure
class Left extends Either {
  constructor(error) {
    super();
    this.value = error;
  }

  map(_) {
    return this; // skip mapping
  }

  isLeft() {
    return true;
  }
}

// Right class: represents success
class Right extends Either {
  constructor(value) {
    super();
    this.value = value;
  }

  map(fn) {
    return Either.of(null, fn(this.value));
  }

  isLeft() {
    return false;
  }
}

// Try class for safe execution
class Try {
  static of(fn, msg) {
    try {
      const result = fn();
      return new Right(result);
    } catch (e) {
      return new Left(msg || e.message);
    }
  }
}

// A risky function that sometimes throws
const riskyOperation = () => {
  if (Math.random() < 0.5) {
    throw new Error("Random failure");
  }
  return "It worked!";
};

// Try running it safely
const result = Try.of(riskyOperation, "Default failure message");

// Output result
console.log(result.toString());  // Either Left("...") or Right("It worked!")
