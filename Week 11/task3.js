const { students } = require('./students');
const { Container } = require('./task2');

class Functor extends Container {
  // Return a Functor, not a raw value
  static of(x) {
    return new Functor(x);
  }
  // map now returns a new wrapped Functor
  map(fn) {
    return Functor.of(fn(this.x));
  }
}

const result = Functor.of(students[4]).map(s => s.gpa).map(g => g * 25).map(Math.round);                   
 
console.log(result.toString());       
console.log(result.valueOf());      
 
const result2 = Functor.of(students[1]).map(s => s.gpa).map(g => g * 25).map(Math.round);
console.log(result2.toString());        


