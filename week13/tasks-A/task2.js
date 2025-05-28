// ************ TASK DESCRIPTION ************
//? Task 2: Pure login validator

/*
* The following code checks user credentials and logs errors using side effects.
* Your job is to:
* - Break it into composable pure functions.
* - Use Either monad to represent success or failure.
* - Use currying to partially apply email and password validators.
*
* You may define:
* - validateEmail :: String → Left/Right
*   - should check if email contains the character "@"
*   - that can be done with .includes("@")
* - validatePassword :: String → Left/Right
*   - password field is valid if it's length is >= 6
* - validateCredentials :: Object → Left/Right
*   - should chain the two above mentioned validations
*   - if successful, should return "Welcome, email"
*/

const validateEmail = (email) =>
  email.includes("@")
    ? new Right(email)
    : new Left("Invalid email");

const validatePassword = (password) =>
  password.length >= 6
    ? new Right(password)
    : new Left("Password too short");

const validateCredentials = (user) =>
  validateEmail(user.email).chain(() =>
    validatePassword(user.password).map(() => `Welcome, ${user.email}`)
  );




// ? OTHER MONADS (Left and Right) DEFINED BELOW
// Below this comment any modification is prohibited.

class Left {
  constructor(error) {
    this.error = error;
  }

  map(_) {
    return this;
  }

  chain(_) {
    return this;
  }

  unwrap() {
    return this.error;
  }

  toString() {
    return `Left(${this.error})`;
  }

  get isLeft() {
    return true;
  }
}

class Right {
  constructor(value) {
    this.value = value;
  }

  map(fn) {
    return new Right(fn(this.value));
  }

  chain(fn) {
    return fn(this.value);
  }

  unwrap() {
    return this.value;
  }

  toString() {
    return `Right(${this.value})`;
  }

  get isLeft() {
    return false;
  }
}




module.exports = { validateEmail, validateCredentials, validatePassword };
