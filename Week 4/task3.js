/*
Write a function getHighAchievers that takes two parameters: students and minimum GPA. 
The function should return students with GPA that is bigger 
than the minimum provided in the function. 
Return an array of formatted strings in the format: "Lejla - GPA: 3.9". 
*/
const students = [
    { id: "S1", name: "Amina", gpa: 3.2 },
    { id: "S2", name: "Marko", gpa: 2.8 },
    { id: "S3", name: "Lejla", gpa: 3.9 }
  ];

function getHighAchievers(students, minGpa) {
  let biggerGpa = students.filter(student => student.gpa > minGpa);
  return biggerGpa.map(student => `${student.name} - GPA: ${student.gpa}`);
}
module.exports = getHighAchievers;
console.log(getHighAchievers(students, 3.0));

