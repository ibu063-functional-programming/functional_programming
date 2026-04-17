const removeInactive = s => ({ ...s, status: s.gpa >= 2.0 ? 'eligible' : 'at-risk' });
const roundGPA       = s => ({ ...s, gpa: Math.round(s.gpa * 10) / 10 });
const formatName     = s => ({ ...s, name: s.name.toUpperCase() });
const toSummary      = s => `${s.name} | GPA: ${s.gpa} | ${s.status}`;

/*
Implement a compose() function (right-to-left) 
and use it to build a studentSummary composed function 
that applies these transformations in the correct order:
removeInactive  →  round GPA  →  format name  →  convert to string
Expected output is: ADNAN BEŠIĆ | GPA: 2.1 | eligible
*/

function compose (...fns) {
    return function (input) {
        return fns.reduceRight(
            (currentVal, fn) => fn(currentVal), input
        )
    }
}

/*
const compose = (...fns) => input => fns.reduceRight((currentVal, fn) => fn(currentVal), input);
*/

const studentSummary =  compose(toSummary, formatName, roundGPA, removeInactive)

  
const student = { id: 'S002', name: 'Adnan Bešić', gpa: 2.14, year: 4, status: 'active' };
console.log(studentSummary(student));

module.exports = {  compose, studentSummary};
