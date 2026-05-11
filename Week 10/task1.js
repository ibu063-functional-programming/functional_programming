const { students, legacyDB } = require('./students');

// 1. Implement a sisDataModule façade that exposes three simple functions. 
// Each function must delegate to legacyDB internally but must not expose any legacyDB calls to the outside world.
// getActiveStudents() — returns only students whose status is "active"
// getStudentById(id) — returns the student object for the given id, or null
// getStudentsByDept(dept) — returns all students in the given department

const sisDataModule = {
  getActiveStudents: () =>
    legacyDB.fetchAll().filter(student => student.status === 'active'),

  getStudentById: (id) =>
    legacyDB.fetchById(id),

  getStudentsByDept: (dept) =>
    legacyDB.fetchByDept(dept),
};

//Example usage
console.log(sisDataModule.getActiveStudents().map(s => s.name));
console.log(sisDataModule.getStudentById('S003'));
console.log(sisDataModule.getStudentsByDept('CS').map(s=>s.name));

module.exports = { sisDataModule };
