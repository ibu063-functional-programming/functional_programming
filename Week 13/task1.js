const { students } = require('./data');
const calculateLetterGrade = (gpa) => {
  if (gpa >= 3.5) return 'A';
  if (gpa >= 2.5) return 'B';
  if (gpa >= 1.5) return 'C';
  return 'F';
};

const isEligibleForScholarship = (student) =>
  student.status === 'active' && student.gpa >= 3.7;

const fullName = (student) => {
  const [firstName, lastName] = student.name.split(' ');
  return `${lastName}, ${firstName}`;
};

const creditProgress = (student) =>
  Math.round((student.credits / 120) * 1000) / 10;

// console.log('calculateLetterGrade(3.8) =>', calculateLetterGrade(3.8));
// console.log('isEligibleForScholarship(students[0]) =>', isEligibleForScholarship(students[0]));
// console.log('fullName(students[0]) =>', fullName(students[0]));
// console.log('creditProgress(students[0]) =>', creditProgress(students[0]));

// Tests for Task 1
console.assert(calculateLetterGrade(3.8) === 'A', 'GPA 3.8 should be A');
console.assert(calculateLetterGrade(2.8) === 'B', 'GPA 2.8 should be B');
console.assert(calculateLetterGrade(1.8) === 'C', 'GPA 1.8 should be C');
console.assert(calculateLetterGrade(1.2) === 'F', 'GPA 1.2 should be F');

console.assert(isEligibleForScholarship(students[0]) === true, 'Amina should be eligible');
console.assert(isEligibleForScholarship(students[1]) === false, 'Adnan should not be eligible');
console.assert(isEligibleForScholarship(students[3]) === false, 'Inactive student should not be eligible');

console.assert(fullName(students[0]) === 'Kovac, Amina', 'Full name should be Kovac, Amina');
console.assert(fullName(students[4]) === 'Softic, Sara', 'Full name should be Softic, Sara');

console.assert(creditProgress(students[0]) === 50.0, '60 credits should be 50.0%');
console.assert(creditProgress(students[1]) === 91.7, '110 credits should be 91.7%');