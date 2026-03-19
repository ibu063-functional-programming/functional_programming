const { getStudentCourses, calculateGPA, percentToGpaPoints } = require("./task5.js");

const courses = [
  { code: "CS101", title: "Intro to Programming", ects: 6 },
  { code: "MATH101", title: "Discrete Math", ects: 6 },
  { code: "IS101", title: "Info Systems", ects: 5 },
];

const enrollments = [
  { studentId: "S1", courseCode: "CS101", status: "enrolled", grade: 92 },
  { studentId: "S1", courseCode: "MATH101", status: "enrolled", grade: 76 },
  { studentId: "S2", courseCode: "CS101", status: "enrolled", grade: null },
  { studentId: "S1", courseCode: "IS101", status: "dropped", grade: 80 },
];

const s1Courses = getStudentCourses(enrollments, courses, "S1");
console.log("S1 courses:", s1Courses);

console.assert(s1Courses.length === 2, "getStudentCourses failed (should return 2 enrolled courses)");

const gpaA = calculateGPA(enrollments, percentToGpaPoints);
const _ = getStudentCourses(enrollments, courses, "S1");
const gpaB = calculateGPA(enrollments, percentToGpaPoints);

console.log("GPA order test:", gpaA, gpaB);
console.assert(gpaA === gpaB, "Purity failed: GPA changed with call order!");

console.log("Task 5 correct");
