/*
This final task requires you to connect all concepts from the lab into a complete SIS report generator. 
You are given the same students array from Task 1. 
Your goal is to produce a final report array using the following steps: 
Step 1 — Filter: Keep only students who are active AND in year 2 or above
Step 2 — Transform: Round each GPA to 1 decimal place
Step 3 — Sort: Sort by GPA descending (highest first)
Step 4 — Format: Convert each student to a string: "[RANK]. NAME – GPA: X.X"

Requirements:
Use pipeline() for the overall data flow
Use compose() to build the format step from smaller functions
Use tap() to log the data after the sort step (before formatting)
Define at least one helper function in pointfree style

const students = [
    { id: 'S001', name: 'Amina Kovač',    gpa: 3.8, year: 2, status: 'active'   },
    { id: 'S002', name: 'Adnan Bešić',    gpa: 2.1, year: 4, status: 'active'   },
    { id: 'S003', name: 'Lejla Hadžić',   gpa: 3.5, year: 1, status: 'active'   },
    { id: 'S004', name: 'Omar Muratović', gpa: 1.8, year: 3, status: 'inactive' },
    { id: 'S005', name: 'Sara Softić',    gpa: 3.9, year: 2, status: 'active'   },
];  

*/
const { students } = require("./task1.js");
const { getField } = require("./task4.js");

//const pipeline = (...fns) => input => fns.reduce((acc, fn) => fn(acc), input);
function pipeline(...fns) {
    return function (input) {
        return fns.reduce(
            (currentVal, fn) => fn(currentVal), input
        )
    }
}


const tap = fn => x => (fn(x), x);

const compose = (...fns) => input => fns.reduceRight((currentValue, fn) => fn(currentValue), input);

// pointfree helper
const getName = getField("name");

// filter step
const isEligible = arr => arr.filter(s => s.status === 'active' && s.year >= 2);

// transform step
const round1 = n => Math.round(n * 10) / 10;

const roundStudentGPA = student => ({
  ...student,
  gpa: round1(student.gpa)
});

const roundAllGPAs = arr => arr.map(roundStudentGPA);

// sort step
const sortByGPADesc = arr =>
  [...arr].sort((a, b) => b.gpa - a.gpa);

// format helpers
const withRank = arr =>
  arr.map((student, index) => ({
    ...student,
    rank: index + 1
  }));

const toUpperCase = str => str.toUpperCase();

const formatStudent = student =>
  `${student.rank}. ${student.name} – GPA: ${student.gpa.toFixed(1)}`;

// compose for format step
const formatOne = compose(
  ({ rank, name, gpa }) => `${rank}. ${name} – GPA: ${gpa}`,
  student => ({
    ...student,
    name: toUpperCase(getName(student)),
    gpa: student.gpa.toFixed(1)
  })
);

const formatReport = arr =>
  withRank(arr).map(formatOne);

// final pipeline
const generateReport = pipeline(
  isEligible,
  roundAllGPAs,
  sortByGPADesc,
  tap(v => console.log("After sort:", v)),
  formatReport
);

const report = generateReport(students);

console.log(report);

module.exports = {
  compose,
  tap,
  getField,
  getName,
  isEligible,
  roundAllGPAs,
  sortByGPADesc,
  formatReport,
  generateReport
};




