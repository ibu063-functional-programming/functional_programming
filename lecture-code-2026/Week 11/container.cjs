// container.js
class Container {
  constructor(x) {
    this.x = x;
  }

  static of(x) {
    return new Container(x);
  }

  map(fn) {
    return fn(this.x);
  }

  toString() {
    return `${this.constructor.name}(${this.x})`;
  }

  valueOf() {
    return this.x;
  }
}

const boxed = Container.of(10);
console.log(boxed.toString());          // "Container(10)"
console.log(boxed.map(x => x * 2));     // 20
console.log(boxed.valueOf());           // 10

module.exports = Container;
