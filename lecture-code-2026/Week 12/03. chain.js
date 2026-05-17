class Monad {
  constructor(x) {
    this.x = x;
  }

  static of(x) {
    return new Monad(x);
  }

  map(fn) {
    return Monad.of(fn(this.x));
  }

  chain(fn) {
    return this.map(fn).unwrap();
  }

  unwrap() {
    return this.x instanceof Monad ? this.x.unwrap() : this.x;
  }

  ap(m) {
    return m.map(this.x);
  }

  toString() {
    return `Monad(${this.x})`;
  }
}

// Example
const step1 = Monad.of(2)
  .map(x => x + 1)               // Monad(3)
  .chain(x => Monad.of(x * 10)); // → 30

const final = Monad.of(y => y - 5).ap(Monad.of(step1));
console.log(final.toString()); // Monad(25)
