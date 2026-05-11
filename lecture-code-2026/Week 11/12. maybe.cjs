// maybe.cjs
class Maybe  {
  constructor(x) {
    this.x = x;
  }

  static of(x) {
    return x === null || x === undefined 
      ? new Nothing() 
      : new Just(x);
  }

  isNothing() {
    throw new Error("isNothing() must be implemented by subclasses");
  }

  map(fn) {
    return Maybe.of(fn(this.x));
  }
}

class Just extends Maybe {
  static of(x) {
    if (x === null || x === undefined) {
      throw new Error("Just should have a value");
    }
    return new Just(x);
  }

  isNothing() {
    return false;
  }

  map(fn) {
    return new Just(fn(this.x));
  }

  toString() {
    return `Just(${this.x})`;
  }
}

class Nothing extends Maybe {
  constructor() {
    super(null);
  }

  isNothing() {
    return true;
  }

  map(_fn) {
    return this;
  }

  toString() {
    return "Nothing()";
  }
}

// Test
console.log(Maybe.of(2209).map(x => x + 1).map(x => x + 1).toString()); // Just(2211)
console.log(Maybe.of(null).map(x => x + 1).toString());                // Nothing()

module.exports = { Maybe, Just, Nothing };
