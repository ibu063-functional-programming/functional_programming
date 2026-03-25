/*
Write a function findStudent(students, studentId) that finds students by 
id by using find method. It should return a student object or undefined. 
*/
const students = [
    { id: "S1", name: "Amina", gpa: 3.2 },
    { id: "S2", name: "Marko", gpa: 2.8 },
    { id: "S3", name: "Lejla", gpa: 3.9 }
  ];
  
function findStudent(students, studentId) {
  return students.find(student => student.id === studentId);
}
  
module.exports = findStudent;
console.log(findStudent(students, "S2"));