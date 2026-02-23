class Left {
  constructor(x) {
    this.x = x;
  }

  isLeft() {
    return true;
  }

  map(_) {
    return this;
  }

  flatMap(_) {
    return this;
  }

  fold(leftFn, _rightFn) {
    return leftFn(this.x);
  }

  toString() {
    return `Left(${this.x})`;
  }
}

class Right {
  constructor(x) {
    this.x = x;
  }

  isLeft() {
    return false;
  }

  map(fn) {
    return new Right(fn(this.x));
  }

  flatMap(fn) {
    return fn(this.x);
  }

  fold(_leftFn, rightFn) {
    return rightFn(this.x);
  }

  toString() {
    return `Right(${this.x})`;
  }
}

class Either {
  static of(left, right) {
    return right === null || right === undefined
      ? new Left(left)
      : new Right(right);
  }

  static Left(x) {
    return new Left(x);
  }

  static Right(x) {
    return new Right(x);
  }
}

// calculator
const toNumber = (input) => {
  const num = Number(input);
  return isNaN(num)
    ? Either.Left(`Invalid number: ${input}`)
    : Either.Right(num);
};

const safeDivide = (a, b) =>
  b === 0
    ? Either.Left("Division by zero")
    : Either.Right(a / b);

const safeAdd = (a, b) => Either.Right(a + b);
const safeSubtract = (a, b) => Either.Right(a - b);
const safeMultiply = (a, b) => Either.Right(a * b);

const calculate = (aInput, bInput, op) =>
  toNumber(aInput).flatMap(a =>
    toNumber(bInput).flatMap(b => {
      switch (op) {
        case '+': return safeAdd(a, b);
        case '-': return safeSubtract(a, b);
        case '*': return safeMultiply(a, b);
        case '/': return safeDivide(a, b);
        default: return Either.Left(`Unknown operator: ${op}`);
      }
    })
  ).fold(
    err => `Error: ${err}`,
    result => `Result: ${result}`
  );

console.log(calculate("10", "2", "+"));  // Result: 12
console.log(calculate("10", "0", "/"));  // Error: Division by zero
console.log(calculate("a", "5", "*"));   // Error: Invalid number: a
console.log(calculate("20", "4", "-"));  // Result: 16
console.log(calculate("8", "2", "/"));   // Result: 4
console.log(calculate("5", "3", "^"));   // Error: Unknown

