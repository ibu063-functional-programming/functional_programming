/*
Now extend the previous  task by finding students at risk. 
They are considered at risk if the grade is less than 6. 
For this you need to write a function hasAtRiskStudents that checks enrollments. 
Think about which function mentioned during the lecture fits the best for this task.
*/
const enrollments = [
    { studentId: "S1", courseCode: "CS101", grade: 8 },
    { studentId: "S2", courseCode: "CS101", grade: 6 },
    { studentId: "S4", courseCode: "CS101", grade: 9 },
    { studentId: "S5", courseCode: "CS101", grade: 9 },
    { studentId: "S6", courseCode: "CS101", grade: 5 },
    { studentId: "S7", courseCode: "CS101", grade: 5 }
  ];

  function hasAtRiskStudents(enrollments) {
    return enrollments.filter(enrollment => enrollment.grade < 6);
  }


module.exports = hasAtRiskStudents;
console.log(hasAtRiskStudents(enrollments));