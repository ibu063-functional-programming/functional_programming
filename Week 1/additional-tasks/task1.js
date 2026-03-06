/*
Given an array of objects representing students with name and grade, write two functions:
An imperative function that returns a list of filtered students who have a grade of 60 or above.
A declarative function that achieves the same result using functional programming principles.
*/

function filterGradesImperative (students) {
    let filteredStudents = [];
    for (let student of students) {
        if (student.grade >= 60) {
            filteredStudents.push(student);
        }
    }
    return filteredStudents;
}

const filterGradesDeclarative = (students) => students.filter(student => student.grade >= 60);

const students = [
    { name: "Osman", grade: 85 },
    { name: "Sena", grade: 55 },
    { name: "Ismet", grade: 72 },
    { name: "Rile", grade: 40 }
];

console.log(filterGradesImperative(students)); // [{ name: "Osman", grade: 85
console.log(filterGradesDeclarative(students)); // [{ name: "Osman", grade: 85
