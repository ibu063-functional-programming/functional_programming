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
const id = x => x;
const double = x => x * 2;
const addOne = x => x + 1;
const composed = x => double(addOne(x)); // g ∘ f

//Identity law test
const m1 = Maybe.of(10);
const m1Mapped = m1.map(id);

console.log(m1.toString());      // Just(10)
console.log(m1Mapped.toString()); // Just(10)
console.log(m1Mapped.valueOf() === m1.valueOf()); // true

//Composition law test
const f = addOne;
const g = double;

const m2 = Maybe.of(10);
const left = m2.map(f).map(g);               // Just(22)
const right = m2.map(x => g(f(x)));          // Just(22)

console.log(left.toString());  // Just(22)
console.log(right.toString()); // Just(22)
console.log(left.valueOf() === right.valueOf()); // true 
