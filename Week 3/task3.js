/*
Implement a pure function isEligibleForExam(student, currentYear) 
that returns true/false based on age (e.g., at least 18), 
but do not use new Date() inside; instead, inject currentYear as an argument 
so the function is deterministic and easy to test. 
Then implement a pure function canRegister(student, holds) that 
checks rules like “student can register only if there are no administrative holds,” 
where holds is passed in as data (no hidden global variables). 
The example of holds could be { S1: ["library_fine"], S2: [] }
*/

const student = { id: "S1", name: "Amna", birthYear: 2006 };
const holds = {
  S1: ["library_fine"],
  S2: []
};

function isEligibleForExam(student, currentYear) {
    // TO DO
    let flag = false;
    const age = currentYear - student.birthYear;
    if(age >= 18) {
        flag = true;
    } else {
        flag = false;
    }
    return flag;
}
function canRegister(student, holdsByStudentId) {
 // TO DO
    let flag = false;
    if(holdsByStudentId[student.id].length === 0) {
        flag = true;
    } else {
        flag = false;
    }
    return flag;
}

module.exports = {isEligibleForExam,canRegister, };

console.log(isEligibleForExam(student, 2024));
console.log(canRegister(student, holds));
  