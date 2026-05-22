const { students, findStudentById } = require('./students');

class Maybe {
  static of(x) { 
    return x === null || x === undefined
      ? new Nothing()
      : new Just(x);
  }
}
 
class Just extends Maybe {
  constructor(x) { super(); this.x = x; }
  isNothing()  { return false; }                        
  map(fn)      { return Maybe.of(fn(this.x)); }                        
  valueOf()    { return this.x; }                        
  toString()   { return `Just(${this.x})`; }                     
}
 
class Nothing extends Maybe {
  isNothing()  { return true; }                     
  map(_fn)     { return Maybe.of(null); }                        
  valueOf()    { return null; }
  toString()   { return "Nothing"; }                        
}

//Example usage
const nameResult = Maybe.of(findStudentById('S003')).map(s => s.name);
console.log(nameResult.toString());
 
const gpaResult  = Maybe.of(findStudentById('S001')).map(s => s.gpa);
console.log(gpaResult.toString());
 
const missing    = Maybe.of(findStudentById('S999')).map(s => s.name);
console.log(missing.toString());
console.log(missing.isNothing());
