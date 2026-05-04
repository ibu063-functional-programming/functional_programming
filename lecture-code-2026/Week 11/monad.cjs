const Functor = require('./functor.cjs');

class Monad extends Functor {
  static of(x) {
    return new Monad(x);
  }

  map(fn) {
    return new Monad(fn(this.x));
  }

  unwrap() {
    const myValue = this.x;
    return myValue instanceof Monad ? myValue.unwrap() : myValue;
  }

  chain(fn) {
    return this.map(fn).unwrap();
  }

  ap(m) {
    // this.x is expected to be a function
    return m.map(this.x);
  }
}

const add = (x) => (y) => x + y;
const something = Monad.of(2).map(add); 
//Monad.of(2) = Monad(2), 
//Monad.of(2).map(add) => Monad(add(2)) => Monad(y => 2 + y)
//something = y => 2 + y
const monad5 = something.ap(Monad.of(3));
//something.ap(Monad.of(3)) => .ap(Monad.of(3)) => 2+ 3 = 5
console.log(monad5.toString()) // Monad(5)

module.exports = Monad;