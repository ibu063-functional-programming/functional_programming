class Left {
  constructor(x) { this.x = x; }
  isLeft() { return true; }
  map(_) { return this; }
  toString() { return `Left(${this.x})`; }
}

class Right {
  constructor(x) { this.x = x; }
  isLeft() { return false; }
  map(fn) { return new Right(fn(this.x)); }
  toString() { return `Right(${this.x})`; }
}

class Either {
  static of(left, right) {
    return right === null || right === undefined
      ? new Left(left)
      : new Right(right);
  }
}

const a = Either.of("Error", null);
console.log(a.toString());  // Left(Error)

const b = Either.of(null, 42).map(x => x + 1);
console.log(b.toString());  // Right(43)


module.exports = Either;