/*
You are given an enrollment object. 
It consists of student id and the grade the student got. 
Your task is to check if all students passed by writing a function 
allStudentsPassed that returns true or false.
*/
const enrollments = [
  { studentId: "S1", courseCode: "CS101", grade: 8 },
  { studentId: "S2", courseCode: "CS101", grade: 6 },
  { studentId: "S4", courseCode: "CS101", grade: 9 },
  { studentId: "S5", courseCode: "CS101", grade: 9 },
  { studentId: "S6", courseCode: "CS101", grade: 5 },
  { studentId: "S7", courseCode: "CS101", grade: 5 }
];

function allStudentsPassed(enrollments) {
  return enrollments.every(enrollment => enrollment.grade >= 6);
}
module.exports = allStudentsPassed;

console.log(allStudentsPassed(enrollments));
