const getStudentNames = require("./task1");
const getTotalEcts = require("./task2");
const getHighAchievers = require("./task3");
const findStudent = require("./task4");
const allStudentsPassed = require("./task5");
const hasAtRiskStudents = require("./task6");
const buildStudentReport = require("./task7");

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
  { studentId: "S2", courseCode: "CS101", grade: 6 },
  { studentId: "S3", courseCode: "CS103", grade: 5 }
];

console.log("1) Student names:");
console.log(getStudentNames(students));

console.log("\n2) Total ECTS:");
console.log(getTotalEcts(courses));

console.log("\n3) High achievers (GPA > 3.0):");
console.log(getHighAchievers(students, 3.0));

console.log("\n4) Find student S2:");
console.log(findStudent(students, "S2"));

console.log("\n5) All students passed?");
console.log(allStudentsPassed(enrollments));

console.log("\n6) Has at-risk students?");
console.log(hasAtRiskStudents(enrollments));

console.log("\n7) Student report (S1):");
console.log(buildStudentReport(students, enrollments, courses, "S1"));
