const { students } = require('./data');
// Impute to refactor

let minimumGPA = 2.0;
function isPassingImpure(student) {
  return student.gpa >= minimumGPA;  
}
 
const activityLog = [];
function logEnrollmentImpure(studentName, courseCode) {
  activityLog.push(studentName + ' enrolled in ' + courseCode); 
}

const isPassing = (student, minimumGPA) =>
  student.gpa >= minimumGPA;

const createEnrollmentEntry = (studentName, courseCode) =>
  `${studentName} enrolled in ${courseCode}`;

// Tests for Task 2

console.assert(
  createEnrollmentEntry('Amina Kovac', 'CS101') === 'Amina Kovac enrolled in CS101',
  'Enrollment entry for Amina should be correct'
);

console.assert(
  createEnrollmentEntry('Sara Softic', 'CS201') === 'Sara Softic enrolled in CS201',
  'Enrollment entry for Sara should be correct'
);

