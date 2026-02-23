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

const users = [
  { id: 1, name: "Alice", address: { city: "London" } },
  { id: 2, name: "Bob" },
  { id: 3, name: "Carol", address: { city: null } },
];

const findUserById = (id) =>
  Maybe.of(users.find(user => user.id === id));

const getField = (attr) => (obj) =>
  Maybe.of(obj).map(o => o[attr]);

const getUserCity = (id) =>
  findUserById(id)
    .map(getField("address"))
    .map(maybeAddr => maybeAddr?.valueOf())
    .map(getField("city"))
    .map(maybeCity => maybeCity?.valueOf());

console.log(getUserCity(1).toString()); // Just("London")
console.log(getUserCity(2).toString()); // Nothing()
console.log(getUserCity(99).toString()); // Nothing()

