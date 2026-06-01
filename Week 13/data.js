const students = [
  { id: 'S001', name: 'Amina Kovac',    gpa: 3.8, year: 2, dept: 'CS', credits: 60,  status: 'active'   },
  { id: 'S002', name: 'Adnan Besic',    gpa: 2.1, year: 4, dept: 'EE', credits: 110, status: 'active'   },
  { id: 'S003', name: 'Lejla Hadzic',   gpa: 3.5, year: 1, dept: 'CS', credits: 30,  status: 'active'   },
  { id: 'S004', name: 'Omar Muratovic', gpa: 1.8, year: 3, dept: 'ME', credits: 75,  status: 'inactive' },
  { id: 'S005', name: 'Sara Softic',    gpa: 3.9, year: 2, dept: 'CS', credits: 58,  status: 'active'   },
];
 
const courses = [
  { code: 'CS101', title: 'Intro to Programming', dept: 'CS', maxSeats: 30, enrolled: 28 },
  { code: 'CS201', title: 'Data Structures',      dept: 'CS', maxSeats: 25, enrolled: 25 },
  { code: 'EE101', title: 'Circuit Analysis',     dept: 'EE', maxSeats: 20, enrolled: 15 },
  { code: 'ME101', title: 'Thermodynamics',       dept: 'ME', maxSeats: 20, enrolled: 10 },
];
 
const findStudentById   = (id)   => students.find(s => s.id   === id)   || null;
const findCourseByCode  = (code) => courses.find(c  => c.code === code)  || null;

module.exports = {students, courses, findStudentById, findCourseByCode}