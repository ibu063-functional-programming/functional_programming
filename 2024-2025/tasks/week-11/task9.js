class Maybe {
  static of(value) {
    return value === null || value === undefined ? new Nothing() : new Just(value);
  }

  map(_) {
    throw new Error("map() must be implemented");
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return `${this.constructor.name}(${this.value})`;
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
}

class Nothing extends Maybe {
  constructor() {
    super();
    this.value = null;
  }

  map(_) {
    return this;
  }
}

const fn1 = x => (x > 0 ? x * 2 : null);
const fn2 = x => (x % 3 === 0 ? x + 1 : null);
const fn3 = x => `Result: ${x}`;

const x = 5;

const result = Maybe.of(x)
  .map(fn1)
  .map(fn2)
  .map(fn3);

console.log(result.toString());   // Just(...) or Nothing()
console.log(result.valueOf());    // Final value or null
