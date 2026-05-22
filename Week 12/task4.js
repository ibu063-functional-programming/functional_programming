const { Either } = require('./task3.js');
class Try {
  // Runs fn(); if it succeeds returns Right(result),
  // if it throws returns Left(errorMessage)
  static of(fn, errorMessage) { 
    try {
      const result = fn();
      return Either.Right(result);
    } catch (_err) {
      return Either.Left(errorMessage);
    }
  }
}

// Example Usage:
const safeParseStudent = (jsonStr) =>
  Try.of(() => JSON.parse(jsonStr), 'Invalid student record');
 
const r1 = safeParseStudent('{"id":"S010","name":"Test User","gpa":3.2}');
console.log(r1.toString());
 
const r2 = safeParseStudent('{bad json}');
console.log(r2.toString());
 
const safeDivide = (score, total) =>
  Try.of(() => {
    if (total === 0) throw new Error('Cannot divide by zero');
    return score / total;
  }, 'Division error');
 
console.log(safeDivide(85, 100).toString());
console.log(safeDivide(85, 0).toString());
