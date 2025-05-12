class Monad {
  constructor(value) {
    this.value = value;
  }

  static of(x) {
    return new Monad(x);
  }

  map(fn) {
    return new Monad(fn(this.value));
  }

  chain(fn) {
    const result = fn(this.value);
    return result instanceof Monad ? result : new Monad(result);
  }

  ap(m) {
    if (typeof this.value !== 'function') {
      throw new Error("ap() expects a monad containing a function");
    }
    return m.map(this.value);
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return `Monad(${this.value})`;
  }

  unwrap() {
    let current = this;
    while (current instanceof Monad && current.value instanceof Monad) {
      current = current.value;
    }
    return current.value;
  }
}

const fnMonad = Monad.of(x => x + 1);
const valMonad = Monad.of(5);

const result = fnMonad.ap(valMonad);

console.log(result.toString()); // Monad(6)
console.log(result.valueOf());  // 6
