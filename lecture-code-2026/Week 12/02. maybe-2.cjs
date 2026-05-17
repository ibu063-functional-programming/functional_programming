class Monad {
  constructor(x) {
    this.x = x;
  }

  map(fn) {
    return new this.constructor(fn(this.x));
  }

  unwrap() {
    return this.x instanceof Monad ? this.x.unwrap() : this.x;
  }

  chain(fn) {
    return this.map(fn).unwrap();
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

  unwrap() {
    return this.x instanceof Monad ? this.x.unwrap() : this.x;
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

  unwrap() {
    return this; // stays Nothing when unwrapped
  }

  toString() {
    return "Nothing";
  }

  isNothing() {
    return true;
  }
}

const findUser = (id) =>
  id % 2 === 0
    ? Maybe.of({ name: "Alice" })
    : Maybe.of(null);

const getName = (user) =>
  Maybe.of(user.name);

console.log(findUser(2).map(getName).toString());          // Just(Just(Alice))
console.log(findUser(2).map(getName).unwrap().toString()); // Just(Alice)
console.log(findUser(2).chain(getName).toString());        // Just(Alice)
console.log(findUser(3).chain(getName).toString());        // Nothing
