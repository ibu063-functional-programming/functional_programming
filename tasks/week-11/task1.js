class Container {
  constructor(value) {
    this.value = value;
  }

  // Applies a function to the stored value and returns a new Container
  map(fn) {
    return new Container(fn(this.value));
  }

  // Returns the raw value
  valueOf() {
    return this.value;
  }

  // Returns a string representation
  toString() {
    return `Container(${this.value})`;
  }
}

const c = new Container(10);
const c2 = c.map(x => x * 2);

console.log(c.toString());   // Container(10)
console.log(c2.toString());  // Container(20)
console.log(c2.valueOf());   // 20
