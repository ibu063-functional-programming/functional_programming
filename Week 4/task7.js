/*
Build a student report. 
You need to create a function 
buildStudentReport(students, enrollments, courses, studentId). 
This function returns an object e.g.:
 {
   name: "Amina",
   totalEcts: 11,
   averageGrade: 8.5,
   passedAll: true
 }
You should only use the functions we mentioned. Loops are not allowed. 

*/
const students = [
    { id: "S1", name: "Amina", gpa: 3.2 },
    { id: "S2", name: "Marko", gpa: 2.8 },
    { id: "S3", name: "Lejla", gpa: 3.9 }
  ];
  
const courses = [
    { code: "CS101", ects: 6 },
    { code: "CS102", ects: 5 },
    { code: "CS103", ects: 4 }
  ];
  
const enrollments = [
    { studentId: "S1", courseCode: "CS101", grade: 8 },
    { studentId: "S1", courseCode: "CS102", grade: 9 },
    { studentId: "S2", courseCode: "CS101", grade: 6 }
];
  
function buildStudentReport(students, enrollments, courses, studentId) {
  const student = students.find(s => s.id === studentId);

  const studentEnrollments = enrollments
    .filter(enrollment => enrollment.studentId === studentId);

  // total ECTS
  const ectsValues = studentEnrollments 
    .map(enrolment => {
      const course = courses.find(course => course.code === enrolment.courseCode);
      return course ? course.ects : 0;
    }); 
  
  const totalEcts = ectsValues.reduce (
    (total, ects) => total + ects,
    0
  );

  // average grade
  const averageGrade = studentEnrollments.length > 0
    ? studentEnrollments.reduce(
      (sum, enrollment) => sum + enrollment.grade,
      0
    ) / studentEnrollments.length
    : 0;

  // passed all courses
  const passedAll = studentEnrollments
    .every(enrollment => enrollment.grade >= 6);

  return ({
    name: student ? student.name : null,
    totalEcts: totalEcts,
    averageGrade: averageGrade,
    passedAll: passedAll
  });
}
  

module.exports = buildStudentReport;

console.log(buildStudentReport(students, enrollments, courses, "S1"));