class Functor {
  constructor(value) {
    this.value = value;
  }

  // Functor law: map returns a new functor
  map(fn) {
    return new Functor(fn(this.value));
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return `Functor(${this.value})`;
  }
}

const id = x => x;

const f1 = new Functor(10);
const f2 = f1.map(id);

console.log(f1.valueOf() === f2.valueOf()); // true
const double = x => x * 2;
const addOne = x => x + 1;
const composed = x => double(addOne(x));

const f = new Functor(5);
const left = f.map(addOne).map(double);     // map(f).map(g)
const right = f.map(composed);              // map(g ∘ f)

console.log(left.valueOf() === right.valueOf()); // true

