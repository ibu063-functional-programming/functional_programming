/*
Create pure “report” functions that compute results from inputs only:
getStudentCourses(enrollments, courses, studentId) returns the course 
objects a student is enrolled in
calculateGPA(enrollments, gradeScale) returns a numeric GPA 
(decide a simple scale, e.g., A=4…F=0, or use percentages). 
Note that enrollments with grade === null should be ignored, 
because they represent assessments that have not been graded yet.
*/
const courses = [
  { code: "CS101", title: "Intro to Programming", ects: 6 },
  { code: "MATH101", title: "Discrete Math", ects: 6 },
  { code: "IS101", title: "Info Systems", ects: 5 },
];

const enrollments = [
  { studentId: "S1", courseCode: "CS101", status: "enrolled", grade: 92 },
  { studentId: "S1", courseCode: "MATH101", status: "enrolled", grade: 76 },
  { studentId: "S2", courseCode: "CS101", status: "enrolled", grade: null },
  { studentId: "S1", courseCode: "IS101", status: "dropped", grade: 80 },
];
function getStudentCourses(enrollmentList, courseList, studentId) {
     // TO DO
     let coursesEnrolled = {};
     for (let e of enrollmentList) {
        if(e.studentId === studentId && e.status === 'enrolled'){
          for (let c of courseList) {
              if(c.code === e.courseCode) {
                coursesEnrolled[c.code] = {...c};
              }
           }
        }    
      }
      return coursesEnrolled;
}
  
function calculateGPA(enrollmentList, gradeScale) {
     // TO DO
     let totalGradePoints = 0;
     let numberOfCourses = 0;
     for (let e of enrollmentList) {
      if(e.grade !== null && e.status === 'enrolled') {
        totalGradePoints += gradeScale(e.grade);
        numberOfCourses++;
      }
     }
    let GPAPoints = totalGradePoints / numberOfCourses;
    return GPAPoints;
  }
  
  function percentToGpaPoints(grade) {
    // TO DO
    if(grade === null) {
      return null;
    } else if (grade >= 90) {
      return 4.0;
    } else if (grade >= 80) {
      return 3.0;
    } else if (grade >= 70) {
      return 2.0;
    } else if (grade >= 60) {
      return 1.0;
    } else {
      return 0.0;
    }
  }
  
module.exports = {getStudentCourses, calculateGPA, percentToGpaPoints, };
  
console.log(getStudentCourses(enrollments, courses, "S1"));
console.log(calculateGPA(enrollments, percentToGpaPoints));