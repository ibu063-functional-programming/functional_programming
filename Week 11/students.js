const students = [
  { id: 'S001', name: 'Amina Kovac',    gpa: 3.8, year: 2, dept: 'CS', status: 'active'   },
  { id: 'S002', name: 'Adnan Besic',    gpa: 2.1, year: 4, dept: 'EE', status: 'active'   },
  { id: 'S003', name: 'Lejla Hadzic',   gpa: 3.5, year: 1, dept: 'CS', status: 'active'   },
  { id: 'S004', name: 'Omar Muratovic', gpa: 1.8, year: 3, dept: 'ME', status: 'inactive' },
  { id: 'S005', name: 'Sara Softic',    gpa: 3.9, year: 2, dept: 'CS', status: 'active'   },
];
 
const findStudentById = (id) => students.find(s => s.id === id) || null;
const findStudentByName = (name) => students.find(s => s.name === name) || null;
module.exports = {students, findStudentById, findStudentByName}