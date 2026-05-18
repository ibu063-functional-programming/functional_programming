const { students, findStudentByName } = require('./students');
const { Maybe } = require('./task4');

const updateGPA = (newGpa) => (student) => ({
    ...student,
    gpa: newGpa
});

const validateGPA = (gpa) => 
    gpa >= 0.0 && gpa <= 4.0 ? gpa : null; 

const safeUpdate = (name, newGpa) => 
    Maybe
        .of(findStudentByName(name))
        .map(s => 
            Maybe
                .of(validateGPA(newGpa))
                .map(g => ({ ...s, gpa: g })));
 
console.log(safeUpdate('Amina Kovac', 3.5).toString());
console.log(safeUpdate('Amina Kovac', 5.0).toString());  // invalid GPA
console.log(safeUpdate('Unknown Student', 3.0).toString());  // student not found

