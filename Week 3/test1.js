const { updateStudentGpaPure } = require("./task1.js");

const students = [
  { id: "S1", name: "Amna", gpa: 3.2 },
  { id: "S2", name: "Marko", gpa: 2.8 }
];

const originalStudents = JSON.parse(JSON.stringify(students));

const updated = updateStudentGpaPure(students, "S1", 3.8);

console.log("Original students:", students);
console.log("Updated students:", updated);
console.assert(
  JSON.stringify(students) === JSON.stringify(originalStudents),
  "Original students array was mutated"
);

console.assert(
  updated.find(s => s.id === "S1").gpa === 3.8,
  "GPA was not updated correctly for S1"
);

console.assert(
  updated.find(s => s.id === "S2").gpa === 2.8,
  "Other students were incorrectly modified"
);

console.assert(
  updated !== students,
  "Function did not return a new array"
);

console.log("Task 1 correct");
