function updateStudentName(student, newName) {
    return { ...student, name: newName };
  }
  
  function addEnrollment(enrollmentList, newEnrollment) {
    return [...enrollmentList, newEnrollment];
  }
  
  function dropEnrollment(enrollmentList, studentId, courseCode) {
    return enrollmentList.reduce((newList, e) => {
      if (e.studentId === studentId && e.courseCode === courseCode) {
        newList.push({ ...e, status: "dropped" });
      } else {
        newList.push(e);
      }
      return newList;
    }, []);
  }

const student = { id: "S1", name: "Amna", birthYear: 2006 };
const enrollments = [
  { studentId: "S1", courseCode: "CS101", status: "enrolled", grade: 92 },
  { studentId: "S1", courseCode: "MATH101", status: "enrolled", grade: 76 },
];
const newEnrollment = { studentId: "S2", courseCode: "CS101", status: "enrolled", grade: null };

  
module.exports = {updateStudentName, addEnrollment, dropEnrollment, };
  