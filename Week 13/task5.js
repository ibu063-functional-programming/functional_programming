const { students, findStudentById, findCourseByCode } = require('./data'); 

const filterActive = (students) =>
  students.filter(student => student.status === 'active');

const filterByDept = (students, dept) =>
  students.filter(student => student.dept === dept);

const sortByGPA = (students) =>
  [...students].sort((a, b) => b.gpa - a.gpa);

const formatStudentSummary = (student) =>
  `${student.name} (${student.dept}) - GPA: ${student.gpa.toFixed(1)}`;

const pipeline = (...functions) => (initialValue) =>
  functions.reduce((value, fn) => fn(value), initialValue);

const generateReport = (students, dept) =>
  pipeline(
    filterActive,
    activeStudents => filterByDept(activeStudents, dept),
    sortByGPA,
    sortedStudents => sortedStudents.map(formatStudentSummary)
  )(students);


// Tests for Task 5

const activeStudents = filterActive(students);

console.assert(activeStudents.length === 4, 'Only 4 students should be active');
console.assert(activeStudents.every(s => s.status === 'active'), 'All returned students should be active');
console.assert(!activeStudents.some(s => s.id === 'S004'), 'Omar should be excluded');

const csStudents = filterByDept(students, 'CS');

console.assert(csStudents.length === 3, 'There should be 3 CS students');
console.assert(csStudents.every(s => s.dept === 'CS'), 'All returned students should be from CS');

const sortedStudents = sortByGPA(students);

console.assert(sortedStudents[0].id === 'S005', 'Sara should be first because she has the highest GPA');
console.assert(students[0].id === 'S001', 'Original students array should not be mutated');

console.assert(
  formatStudentSummary(students[0]) === 'Amina Kovac (CS) - GPA: 3.8',
  'Student summary should be formatted correctly'
);

const csReport = generateReport(students, 'CS');

console.assert(
  JSON.stringify(csReport) === JSON.stringify([
    'Sara Softic (CS) - GPA: 3.9',
    'Amina Kovac (CS) - GPA: 3.8',
    'Lejla Hadzic (CS) - GPA: 3.5'
  ]),
  'CS report should be sorted and formatted correctly'
);

