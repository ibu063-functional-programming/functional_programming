const { updateStudentName, addEnrollment, dropEnrollment } = require("./task4.js");

const student = { id: "S1", name: "Amna", birthYear: 2006 };
const updated = updateStudentName(student, "Amna K.");

console.log("Original student:", student);
console.log("Updated student:", updated);

console.assert(student.name === "Amna", "Original student was mutated!");
console.assert(updated.name === "Amna K.", "updateStudentName failed");

const enrollments = [
  { studentId: "S1", courseCode: "CS101", status: "enrolled", grade: 92 },
  { studentId: "S1", courseCode: "MATH101", status: "enrolled", grade: 76 },
];

const newEnrollment = { studentId: "S2", courseCode: "CS101", status: "enrolled", grade: null };
const added = addEnrollment(enrollments, newEnrollment);

console.assert(enrollments.length === 2, "Original enrollments mutated!");
console.assert(added.length === 3, "addEnrollment failed");

console.log("Before drop:", JSON.stringify(enrollments));
const dropped = dropEnrollment(enrollments, "S1", "CS101");
console.log("After drop (original):", JSON.stringify(enrollments));
console.log("Dropped result:", JSON.stringify(dropped));

const originalStatus = enrollments[0].status;
const newStatus = dropped[0].status;

console.assert(originalStatus === "enrolled", "Original list was mutated!");
console.assert(newStatus === "dropped", "dropEnrollment failed");

console.log("Task 4 correct");
