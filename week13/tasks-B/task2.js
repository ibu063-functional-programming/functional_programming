// ************ TASK DESCRIPTION ************
//? Task 2: Pure registration validator

/*
* The following code validates registration data but relies on console logs and side effects.
* Your job is to:
* - Break it into composable pure functions.
* - Use Left or Right monads to represent success or failure.
* - Use currying to partially apply name and age validators.
*
* You must define:
* - validateName :: minLen => name => Left/Right
*   - must check if name is at least minLen characters long
* - validateAge :: minAge => age => Left/Right
*   - must check if age is 18 or above
* - validateRegistration :: Object → Left/Right
*   - should chain the two above validations
*   - if successful, should return "Registered: name (age)"
*/


const validateName = name =>
  name && name.length >= 2
    ? new Right(name)
    : new Left("Invalid name");

const validateAge = age =>
  age >= 18
    ? new Right(age)
    : new Left("User too young");


const validateRegistration = user =>
  validateName(user.name)
    .chain(name =>
      validateAge(user.age)
        .map(age => `Registered: ${name} (${age})`)
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

module.exports = { validateName, validateAge, validateRegistration };
