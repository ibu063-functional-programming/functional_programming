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

  fold(fLeft, _) {
    return fLeft(this.x);
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

  fold(_, fRight) {
    return fRight(this.x);
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

// login
const USERS = {
  "john@example.com": { password: "password123" },
  "alice@example.com": { password: "wonderland" },
};

const validateEmail = (email) =>
  /\S+@\S+\.\S+/.test(email)
    ? Either.Right(email)
    : Either.Left("Invalid email format");


const validatePassword = (password) =>
  password.length >= 6
    ? Either.Right(password)
    : Either.Left("Password too short");


const findUser = (email) =>
  USERS[email]
    ? Either.Right({ email, user: USERS[email] })
    : Either.Left("User not found");


const verifyPassword = ({ email, user }, inputPassword) =>
  user.password === inputPassword
    ? Either.Right(`Login successful for ${email}`)
    : Either.Left("Incorrect password");


const login = (email, password) =>
  validateEmail(email)
    .flatMap(validEmail =>
      validatePassword(password)
        .flatMap(validPassword =>
          findUser(validEmail)
            .flatMap(userData =>
              verifyPassword(userData, validPassword)
            )
        )
    )
    .fold(
      err => `Login failed: ${err}`,
      success => success
    );

// === Test cases ===
console.log(login("john@example.com", "password123"));   
console.log(login("alice@example.com", "wrongpass"));    
console.log(login("invalid-email", "123456"));          
console.log(login("notfound@example.com", "whatever"));  

