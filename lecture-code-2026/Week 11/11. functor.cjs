// functor.js
const Container = require('./container.cjs');

class Functor extends Container {
  //the of() method produces a Functor object, and so does the map() method
  static of(x) {
    return new Functor(x);
  }

  map(fn) {
    return Functor.of(fn(this.x));
  }
}
const value = Functor.of(5);
const doubled = value.map(x => x * 2);
console.log(doubled.toString()); // "Functor(10)"

module.exports = Functor;

// functor is some container that allows us to apply map() to its contents, producing a new container of the same type.
// functor: arrays