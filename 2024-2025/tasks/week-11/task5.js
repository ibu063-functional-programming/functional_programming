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
const getField = (attr) => (obj) =>
  Maybe.of(obj).map(o => o[attr]);

const user = { name: "Alice", age: 30 };
const noUser = null;

const nameField = getField("name");

console.log(nameField(user).toString());    // Just("Alice")
console.log(nameField(noUser).toString());  // Nothing()
