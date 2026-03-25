/*
Write a function getStudentNames(students) that returns an array of students names. 
In this task you need to extract student names but you are not allowed to use loops.
Return an array of formatted student labels in the following format: "Amina (GPA: 3.2)"
*/

const students = [
  { id: "S1", name: "Amina", gpa: 3.2 },
  { id: "S2", name: "Marko", gpa: 2.8 },
  { id: "S3", name: "Lejla", gpa: 3.9 }
];

function getStudentNames(students) {
  return students.map(student => `${student.name} (GPA: ${student.gpa})`);
}

console.log(getStudentNames(students));

module.exports = getStudentNames;