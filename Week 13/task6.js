const { students, findStudentById, findCourseByCode } = require('./data');  
const hasMinGPA = (minGpa) => (student) =>
  student.gpa >= minGpa;

const hasMinCredits = (minCredits) => (student) =>
  student.credits >= minCredits;

const isInDept = (dept) => (student) =>
  student.dept === dept;

const isActiveStudent = () => (student) =>
  student.status === 'active';

const applyAllValidators = (student, validators) =>
  validators.every((validator) => validator(student));

const calculateFinalGrade = (scores) => {
  const validScores = scores.filter((score) => score >= 0 && score <= 100);

  if (validScores.length === 0) return 0;

  const total = validScores.reduce((sum, score) => sum + score, 0);
  return Math.round((total / validScores.length) * 10) / 10;
};

console.assert(hasMinGPA(3.5)(students[0]) === true, 'Amina should have GPA >= 3.5');
console.assert(hasMinGPA(3.5)(students[1]) === false, 'Adnan should not have GPA >= 3.5');

console.assert(hasMinCredits(50)(students[0]) === true, 'Amina should have at least 50 credits');
console.assert(hasMinCredits(80)(students[0]) === false, 'Amina should not have at least 80 credits');

const scholarshipValidators = [
  hasMinGPA(3.7),
  hasMinCredits(50),
  isInDept('CS'),
  isActiveStudent()
];

console.assert(
  applyAllValidators(students[0], scholarshipValidators) === true,
  'Amina should pass all validators'
);

console.assert(
  applyAllValidators(students[2], scholarshipValidators) === false,
  'Lejla should fail because GPA is below 3.7 and credits are below 50'
);

console.assert(
  applyAllValidators(students[3], scholarshipValidators) === false,
  'Omar should fail because he is inactive and not in CS'
);

console.assert(calculateFinalGrade([85, 72, 90, 68]) === 78.8, 'Average should be 78.8');
console.assert(calculateFinalGrade([100, -5, 80, 120]) === 90.0, 'Invalid scores should be ignored');
console.assert(calculateFinalGrade([]) === 0, 'Empty array should return 0');
console.assert(calculateFinalGrade([-10, 150]) === 0, 'No valid scores should return 0');
