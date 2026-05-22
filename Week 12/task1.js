const { students, findStudentById } = require('./students');
function getStudentGPA(id) {
  const student = findStudentById(id);
  if (!student) throw new Error("Error caught: Student not found: " + id);
  return student.gpa;
}
 
function checkHonours(gpa) {
  if (typeof gpa !== 'number') throw new Error("GPA must be a number");
  return gpa >= 3.5 ? "Honours" : "Standard";
}

const gpa = getStudentGPA('S001');
const result = checkHonours(gpa);
console.log(result);

// Missing student
try {
  const missingGpa = getStudentGPA('S999');
  const missingResult = checkHonours(missingGpa);
  console.log(missingResult);
} catch (error) {
  console.log(error.message);
}