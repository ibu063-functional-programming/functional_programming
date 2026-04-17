const { pipeline,  students } = require("./task1.js");
const getField = key => obj => obj[key];
const students = [
    { id: 'S001', name: 'Amina Kovač',    gpa: 3.8, year: 2, status: 'active'   },
    { id: 'S002', name: 'Adnan Bešić',    gpa: 2.1, year: 4, status: 'active'   },
    { id: 'S003', name: 'Lejla Hadžić',   gpa: 3.5, year: 1, status: 'active'   },
    { id: 'S004', name: 'Omar Muratović', gpa: 1.8, year: 3, status: 'inactive' },
    { id: 'S005', name: 'Sara Softić',    gpa: 3.9, year: 2, status: 'active'   },
];

/*
Using pointfree style, create the following three derived functions 
without ever writing the explicit student argument:
getName   — extracts the name field from a student object
getGPA    — extracts the gpa field from a student object
getYear   — extracts the year field from a student object
Then use your pipeline() from Task 1 to build a pointfree 
allNames function that extracts the names of all students in an array
*/

const getName = getField('name');
const getGPA = getField('gpa');
const getYear = getField('year');

/*
function myMap (fn) {
    return function (arr) {
        return arr.map(fn)
    }
}
*/
const myMap = fn => arr => arr.map(fn);
const allNames = pipeline(myMap(getName)); //myMap(getName)(students)
 
console.log(allNames(students));

module.exports = {  getField};
 
