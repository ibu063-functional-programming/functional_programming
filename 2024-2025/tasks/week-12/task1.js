class Monad {
  constructor(x) {
    this.x = x;
  }

  map(fn) {
    return new this.constructor(fn(this.x));
  }

  chain(fn) {
    return this.map(fn).unwrap();
  }

  unwrap() {
    return this.x instanceof Monad ? this.x.unwrap() : this.x;
  }

  toString() {
    return `${this.constructor.name}(${this.x})`;
  }
}

class Maybe extends Monad {
  static of(x) {
    return x === null || x === undefined
      ? new Nothing()
      : new Just(x);
  }
}

class Just extends Maybe {
  constructor(x) {
    super(x);
  }

  map(fn) {
    return Maybe.of(fn(this.x));
  }

  chain(fn) {
    return fn(this.x);
  }

  filter(predicate) {
    return predicate(this.x) ? this : new Nothing();
  }

  toString() {
    return `Just(${this.x instanceof Monad ? this.x.toString() : this.x})`;
  }

  isNothing() {
    return false;
  }
}

class Nothing extends Maybe {
  constructor() {
    super(null);
  }

  map(_) {
    return this;
  }

  chain(_) {
    return this;
  }

  filter(_) {
    return this;
  }

  unwrap() {
    return this; // safely return the Nothing instance itself
  }

  toString() {
    return "Nothing";
  }

  isNothing() {
    return true;
  }
}


const result1 = Maybe.of(10).filter(x => x > 5);
const result2 = Maybe.of(2).filter(x => x > 5);
const result3 = Maybe.of(null).filter(x => x > 5);

console.log(result1.toString()); // Just(10)
console.log(result2.toString()); // Nothing
console.log(result3.toString()); // Nothing

