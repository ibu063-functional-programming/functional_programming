const { students, legacyDB } = require('./students');
// TO DO: Strategy function 
// 3. Implement a sortStudents(students, compareFn) function that 
// accepts the student array and any comparison strategy, 
// then returns a sorted copy (do not mutate the original). 
// Then define the following three concrete strategies:
// byGPADesc - sorts highest GPA first
// byNameAsc - sorts alphabetically by name (A → Z)
// byYearAsc - sorts by year of study, lowest first


// TO DO: Concrete strategies 
const sortStudents = (students, compareFn) => {
  return [...students].sort(compareFn);
};

const byGPADesc = (a, b) => b.gpa - a.gpa;

const byNameAsc = (a, b) => a.name.localeCompare(b.name);

const byYearAsc = (a, b) => a.year - b.year;


console.log(sortStudents(students, byGPADesc).map(s => `${s.name}:${s.gpa}`));
console.log(sortStudents(students, byNameAsc).map(s => s.name));
console.log(sortStudents(students, byYearAsc).map(s => s.year));

module.exports = { sortStudents, byGPADesc, byNameAsc, byYearAsc };