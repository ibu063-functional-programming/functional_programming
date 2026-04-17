//You are working on the Student Information System. The following helper functions are already provided:

const students = [
    { id: 'S001', name: 'Amina Kovač',    gpa: 3.8, year: 2, status: 'active'   },
    { id: 'S002', name: 'Adnan Bešić',    gpa: 2.1, year: 4, status: 'active'   },
    { id: 'S003', name: 'Lejla Hadžić',   gpa: 3.5, year: 1, status: 'active'   },
    { id: 'S004', name: 'Omar Muratović', gpa: 1.8, year: 3, status: 'inactive' },
    { id: 'S005', name: 'Sara Softić',    gpa: 3.9, year: 2, status: 'active'   },
];
   
const filterActive    = arr => arr.filter(s => s.status === 'active');
const filterGoodGPA   = arr => arr.filter(s => s.gpa >= 3.0);
const getNames        = arr => arr.map(s => s.name);
const sortAlpha       = arr => [...arr].sort((a, b) => a.localeCompare(b));

// Create pipeline()
/*
Implement a pipeline() function and use it to build a data processing pipeline that:
Filters only active students
Keeps only students with GPA ≥ 3.0
Extracts their names
Sorts the names alphabetically
Expected output: [ 'Amina Kovač', 'Lejla Hadžić', 'Sara Softić' ]
*/
  
function pipeline(...fns) {
    return function (input) {
        return fns.reduce(
            (currentVal, fn) => fn(currentVal), input
        )
    }
}

const pipelineArrow = (...fns) => input => fns.reduce((currentVal, fn) => fn(currentVal), input);

const topActiveStudents = pipeline(filterActive, filterGoodGPA, getNames, sortAlpha);
const topActiveStudentsArrow = pipelineArrow(filterActive, filterGoodGPA, getNames, sortAlpha);


   
console.log(topActiveStudents(students));
console.log(topActiveStudentsArrow(students));
  
module.exports = {  pipeline, filterActive, filterGoodGPA, getNames, sortAlpha, topActiveStudents, students};
