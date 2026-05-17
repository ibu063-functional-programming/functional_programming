class Left {
  constructor(x) { this.x = x; }

  isLeft() { return true; }

  map(_) { return this; }

  flatMap(_) { return this; }

  fold(errFn, _successFn) {
    return errFn(this.x);
  }

  toString() {
    return `Left(${this.x})`;
  }
}

class Right {
  constructor(x) { this.x = x; }

  isLeft() { return false; }

  map(fn) {
    return new Right(fn(this.x));
  }

  flatMap(fn) {
    return fn(this.x);
  }

  fold(_errFn, successFn) {
    return successFn(this.x);
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



const validateEmail = email =>
  /\S+@\S+\.\S+/.test(email)
    ? Either.Right(email)
    : Either.Left("Invalid email format");

const validatePassword = pwd =>
  pwd.length >= 6
    ? Either.Right(pwd)
    : Either.Left("Password too short");

const registerUser = (email, password) =>
  validateEmail(email)
    .map(() => password)
    .flatMap(validatePassword)
    .fold(
      err => `Registration failed: ${err}`,
      () => "User registered successfully!"
    );

console.log(registerUser("test@example.com", "123456"));  
console.log(registerUser("bad-email", "123456"));         
console.log(registerUser("test@example.com", "123"));     
