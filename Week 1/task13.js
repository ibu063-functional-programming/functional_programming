/*
You are given a student object in JSON format: 
const student = {
  name: "Ana",
  age: 21,
  grades: [78, 85, 92, 69]
};

You need to: 
Print the student’s name and age
Calculate and return the average grade using a loop
*/

const student = {
  name: "Ana",
  age: 21,
  grades: [78, 85, 92, 69]
};

console.log("Name: " + student.name);
console.log("Age: " + student.age);

let sum = 0;
for (let i = 0; i < student.grades.length; i++) {
    sum += student.grades[i];
}
let average = sum / student.grades.length;

console.log("Average grade: " + average);