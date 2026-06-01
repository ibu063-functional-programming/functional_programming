const { students } = require('./data');
const updateGPA = (student, newGpa) =>
  ({ ...student, gpa: newGpa });

const deactivateStudent = (student) =>
  ({ ...student, status: 'inactive' });

const addCredits = (student, additionalCredits) =>
  ({ ...student, credits: student.credits + additionalCredits });


// Tests for Task 3

const original = {
  id: 'S001',
  name: 'Amina Kovac',
  gpa: 3.8,
  credits: 60,
  status: 'active'
};

const updatedGPAStudent = updateGPA(original, 3.5);

console.assert(updatedGPAStudent.gpa === 3.5, 'New object has updated GPA');
console.assert(original.gpa === 3.8, 'Original GPA should remain unchanged');
console.assert(updatedGPAStudent !== original, 'updateGPA should return a new object');

const inactiveStudent = deactivateStudent(original);

console.assert(inactiveStudent.status === 'inactive', 'New object has inactive status');
console.assert(original.status === 'active', 'Original status should remain active');
console.assert(inactiveStudent !== original, 'deactivateStudent should return a new object');

const studentWithMoreCredits = addCredits(original, 15);

console.assert(studentWithMoreCredits.credits === 75, 'New object has increased credits');
console.assert(original.credits === 60, 'Original credits should remain unchanged');
console.assert(studentWithMoreCredits !== original, 'addCredits should return a new object');
