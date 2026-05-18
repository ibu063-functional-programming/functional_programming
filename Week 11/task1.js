const { students } = require('./students');
// Write the correct HM signature above each function.

// getStudentName :: Student -> String
const getStudentName = (student) => student.name;

// isActive :: Student -> Boolean
const isActive = (student) => student.status === 'active';

// formatGPA :: (String, Number) -> String
const formatGPA = (label, gpa) => `${label}: ${gpa.toFixed(2)}`;

// getStudentsByDept :: (String, [Student]) -> [Student]
const getStudentsByDept = (dept, students) => students.filter(s => s.dept === dept);

