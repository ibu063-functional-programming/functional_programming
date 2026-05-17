class Maybe {
  static of(x) {
    return x === null || x === undefined
      ? new Nothing()
      : new Just(x);
  }

  isNothing() {
    throw new Error("isNothing() must be implemented by subclasses");
  }

  map(fn) {
    throw new Error("map() must be implemented by subclasses");
  }

  toString() {
    throw new Error("toString() must be implemented by subclasses");
  }

  unwrap() {
    return this instanceof Just ? this.value : null;
  }
}

class Just extends Maybe {
  constructor(value) {
    super();
    this.value = value;
  }

  isNothing() {
    return false;
  }

  map(fn) {
    return Maybe.of(fn(this.value));
  }

  toString() {
    return `Just(${this.value instanceof Maybe ? this.value.toString() : this.value})`;
  }
}

class Nothing extends Maybe {
  isNothing() {
    return true;
  }

  map(_) {
    return this; // Nothing stays Nothing
  }

  toString() {
    return "Nothing";
  }
}

const findUser = (id) =>
  id % 2 === 0
    ? Maybe.of({ name: "Alice" })
    : Maybe.of(null); // → Nothing

const getName = (user) =>
  Maybe.of(user.name);

const result = findUser(2).map(getName); // Just(Just("Alice"))
console.log(result.toString()); // → Just(Just(Alice))

const result2 = findUser(3).map(getName); // Nothing.map(...) → Nothing
console.log(result2.toString()); // → Nothing

