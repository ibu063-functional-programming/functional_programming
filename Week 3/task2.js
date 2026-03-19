/*
createStudent(id, name, birthYear) that  returns a new student object,
createCourse(code, title, ects) that returns a new course object. 
Add a pure function createEnrollment(studentId, courseCode) that returns an enrollment object with default fields grade: null, status: "enrolled". 
*/
function createStudent(id, name, birthYear) {
     // TO DO
     return ({id, name, birthYear}); 
  }
  
  function createCourse(code, title, ects) {
     // TO DO
     return ({code, title, ects});
  }
  
  function createEnrollment(studentId, courseCode) {
     // TO DO
     return ({studentId, courseCode, grade: null, status: "enrolled"});
  }
  
module.exports = {  createStudent, createCourse, createEnrollment,};
console.log(createStudent("S1", "Amina", 1995));
console.log(createCourse("C1", "Functional Programming", 5));
console.log(createEnrollment("S1", "C1"));
  