class Maybe {
  static of(value) {
    return value === null || value === undefined
      ? new Nothing()
      : new Just(value);
  }

  // Abstract method to override
  map(fn) {
    throw new Error("map() must be implemented in subclasses");
  }

  isNothing() {
    throw new Error("isNothing() must be implemented in subclasses");
  }

  toString() {
    return `${this.constructor.name}(${this.value})`;
  }

  valueOf() {
    return this.value;
  }
}


class Just extends Maybe {
  constructor(value) {
    super();
    this.value = value;
  }

  map(fn) {
    return Maybe.of(fn(this.value));
  }

  isNothing() {
    return false;
  }
}

class Nothing extends Maybe {
  constructor() {
    super();
    this.value = null;
  }

  map(_) {
    return this;
  }

  isNothing() {
    return true;
  }
}

const maybe1 = Maybe.of(10).map(x => x + 5);
console.log(maybe1.toString()); // Just(15)

const maybe2 = Maybe.of(null).map(x => x + 5);
console.log(maybe2.toString()); // Nothing()
