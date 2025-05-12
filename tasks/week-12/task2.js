// maybe.js

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
    return this;
  }

  toString() {
    return "Nothing";
  }

  isNothing() {
    return true;
  }
}

const safeProp = (obj, prop) =>
  obj && Object.prototype.hasOwnProperty.call(obj, prop)
    ? Maybe.of(obj[prop])
    : new Nothing();


const user = { name: "Alice", age: 30 };

console.log(safeProp(user, "name").toString());   // Just(Alice)
console.log(safeProp(user, "email").toString());  // Nothing
console.log(safeProp(null, "name").toString());   // Nothing

