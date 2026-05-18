const { students, findStudentById } = require('./students');

class Maybe {
  constructor(x) { this.x = x; }
  static of(x) { 
    return x === null || x === undefined
    ? new Nothing()
    : new Just(x);
  }
}
 
class Just extends Maybe {
  isNothing() { return false;}
 
  map(fn) { return new Just(fn(this.x)); }
 
  valueOf() { return this.x; }
 
  toString() { return `Just(${this.x})` ;}
}
 
class Nothing extends Maybe {
  constructor() { super(null); }
 
  isNothing() { return true; }
 
  map(_fn) { return this; }  
 
  valueOf() { return null; }
 
  toString() { return `Nothing()`; }
}

if (require.main === module) {
  const nameResult = Maybe.of(findStudentById('S003')).map(s => s.name);
  console.log(nameResult.toString());
   
  const gpaResult = Maybe.of(findStudentById('S001')).map(s => s.gpa);
  console.log(gpaResult.toString());    
   
  const missing = Maybe.of(findStudentById('S999')).map(s => s.name);
  console.log(missing.toString());     
  console.log(missing.isNothing());     
}

module.exports = { Maybe, Just, Nothing };
