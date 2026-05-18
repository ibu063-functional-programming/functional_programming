const { students } = require('./students');
class Container {
  
  constructor(x) {
    this.x = x;
  }
 
  // Factory method — avoids writing 'new Container()' everywhere
  static of(x) {
    return new Container(x);
  }
 
  // Apply fn to the wrapped value and return the raw result
  map(fn) {
    return fn(this.x)
  }
 
  // Retrieve the wrapped value
  valueOf() {
    return this.x;
  }
 
  // Human-readable representation
  toString() {
    return `Container(${this.x})`;
  }
}

const studentBox = Container.of(students[0]);
 
console.log(studentBox.map(s => s.name));
console.log(studentBox.map(s => s.gpa)); 
console.log(studentBox.valueOf().name);
console.log(Container.of(42).toString());

module.exports = { Container };