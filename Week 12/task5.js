const { Either, lookupStudent } = require('./task3.js');

const validateGPA = (gpa) =>
  typeof gpa === 'number' && gpa >= 0.0 && gpa <= 4.0
    ? Either.Right(gpa)
    : Either.Left("GPA out of range");

const validateStatus = (student) =>
  student.status === 'active'
    ? Either.Right(student)
    : Either.Left("Student is inactive");

const validateYear = (student) =>
  student.year >= 1 && student.year <= 4
    ? Either.Right(student)
    : Either.Left("Invalid year");

//Example Usage:
// const lookupStudent = (id) => {
//   const s = findStudentById(id);
//   return s ? Either.Right(s) : Either.Left('Student not found: ' + id);
// };

const validateStudent = (id) =>
  lookupStudent(id)
    .map(validateStatus)   // skipped if Left
    .map(validateYear);    // skipped if Left
 
console.log(validateStudent('S001').toString());  // active, year 2
console.log(validateStudent('S004').toString());  // inactive
console.log(validateStudent('S999').toString());  // not found

module.exports = {validateGPA}