const { createStudent, createCourse, createEnrollment } = require("./task2.js");

const s = createStudent("S1", "Amna", 2006);
const c = createCourse("CS101", "Intro to Programming", 6);
const e = createEnrollment("S1", "CS101");

console.log("Student:", s);
console.log("Course:", c);
console.log("Enrollment:", e);

console.assert(s.id === "S1" && s.name === "Amna" && s.birthYear === 2006, "createStudent failed");
console.assert(c.code === "CS101" && c.ects === 6, "createCourse failed");
console.assert(e.status === "enrolled" && e.grade === null, "createEnrollment defaults failed");

console.log("Task 2 correct");
