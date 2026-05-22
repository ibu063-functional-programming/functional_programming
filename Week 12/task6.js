const { Either } = require('./task3.js');
const { validateGPA } = require('./task5.js');
const { students } = require('./students.js');

const findStudentById = (id) => students.find(s => s.id === id) || null;

const lookupStudent = (id) => {
  const s = findStudentById(id);
  return s ? Either.Right(s) : Either.Left('Student not found: ' + id);
};

//Example Usage:
// With only map() — produces double-wrapping
const badUpdate = (id, gpa) =>
  lookupStudent(id).map(s => validateGPA(gpa).map(g => ({ ...s, gpa: g })));
console.log(badUpdate('S001', 3.5).toString());  // Right(Right(...)) ← double-wrapped


const safeUpdateGPA = (id, newGpa) =>
  lookupStudent(id).chain(s => validateGPA(newGpa).map(g => ({ ...s, gpa: g })));

console.log(safeUpdateGPA('S001', 3.5).toString()); // Right({...gpa:3.5...})
console.log(safeUpdateGPA('S001', 5.0).toString()); // Left(GPA out of range)
console.log(safeUpdateGPA('S999', 3.0).toString()); // Left(Student not found: S999)
