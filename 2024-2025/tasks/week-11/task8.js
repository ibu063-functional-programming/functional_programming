class Monad {
  constructor(value) {
    this.value = value;
  }

  // map returns a new monad with the function applied
  map(fn) {
    return new Monad(fn(this.value));
  }

  // chain flattens the nested monads
  chain(fn) {
    const result = fn(this.value);
    return result instanceof Monad ? result : new Monad(result);
  }

  // unwrap returns the innermost raw value
  unwrap() {
    let current = this;
    while (current instanceof Monad) {
      if (!(current.value instanceof Monad)) break;
      current = current.value;
    }
    return current.value;
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return `Monad(${this.value})`;
  }

  static of(x) {
    return new Monad(x);
  }
}

const m = Monad.of(5)
  .map(x => x + 2)              // Monad(7)
  .chain(x => Monad.of(x * 3)); // Monad(21)

console.log(m.toString());      // Monad(21)
console.log(m.unwrap());        // 21

const nested = Monad.of(Monad.of(42));
console.log(nested.unwrap());   // 42 fully unwrapped
