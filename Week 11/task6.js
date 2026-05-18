const { findStudentByName } = require('./students');

class JustM {
  constructor(x) {
    this.x = x;
  }

  isNothing() {
    return false;
  }

  map(fn) {
    return MaybeM.of(fn(this.x));
  }

  unwrap() {
    return this.x instanceof JustM || this.x instanceof NothingM
      ? this.x
      : this;
  }

  chain(fn) {
    return this.map(fn).unwrap();
  }

  valueOf() {
    return this.x;
  }

  toString() {
    return `Just(${JSON.stringify(this.x)})`;
  }
}

class NothingM {
  constructor() {
    this.x = null;
  }

  isNothing() {
    return true;
  }

  map(_fn) {
    return this;
  }

  unwrap() {
    return this;
  }

  chain(_fn) {
    return this;
  }

  valueOf() {
    return null;
  }

  toString() {
    return 'Nothing()';
  }
}

const MaybeM = {
  of(x) {
    return x === null || x === undefined
      ? new NothingM()
      : new JustM(x);
  }
};

const validateGPA = (gpa) =>
  gpa >= 0.0 && gpa <= 4.0 ? gpa : null;

const updateGPA = (newGpa) => (student) => ({
  ...student,
  gpa: newGpa
});

const safeUpdateM = (name, newGpa) =>
  MaybeM
    .of(findStudentByName(name))
    .chain(student =>
      MaybeM
        .of(validateGPA(newGpa))
        .map(validGpa => updateGPA(validGpa)(student))
    );

const r1 = safeUpdateM('Amina Kovac', 3.5);
console.log(r1.toString());
console.log(r1.isNothing());

const r2 = safeUpdateM('Amina Kovac', 5.0);
console.log(r2.toString());
console.log(r2.isNothing());

const r3 = safeUpdateM('Unknown Student', 3.0);
console.log(r3.toString());
console.log(r3.isNothing());

module.exports = { MaybeM, JustM, NothingM, validateGPA, updateGPA, safeUpdateM };