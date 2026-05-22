const { students, findStudentById } = require('./students');
class Either {
  static of(msg, x) { 
    return x === null || x === undefined
      ? new Left(msg)
      : new Right(x);
  }
 
  static Right(x)   { return new Right(x); }
  static Left(msg)  { return new Left(msg); }
}
 
class Right extends Either {
  constructor(x) { super(); this.x = x; }
  isLeft()    { return false; }              
  map(fn)     { return new Right(fn(this.x))}    
  chain (fn) { return fn(this.x);}      
  valueOf()   { return this.x; }                   
  // toString()  { return `Right(${this.x})`; }                  
  toString() { 
    return this.x instanceof Either
      ? `Right(${JSON.stringify(this.x)})`
      : `Right(${this.x})`;
  }
}
 
class Left extends Either {
  constructor(msg) { super(); this.msg = msg; }
  isLeft()    { return true}               
  map(_fn)    { return this;}    
  chain (_fn) {return this;}          
  valueOf()   { return this.msg; }
  toString()  { return `Left(${this.msg})`; }             
}

// Example Usage:
const lookupStudent = (id) => {
  const s = findStudentById(id);
  return s ? Either.Right(s) : Either.Left('Student not found: ' + id);
};
 
const r1 = lookupStudent('S002').map(s => s.name);
console.log(r1.toString());
 
const r2 = lookupStudent('S002').map(s => s.status);
console.log(r2.toString());
 
const r3 = lookupStudent('S999').map(s => s.name);
console.log(r3.toString());
console.log(r3.isLeft());

module.exports ={Either, lookupStudent}