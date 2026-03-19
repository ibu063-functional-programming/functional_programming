 /*
 studentId, newGpa)
The function must: 
NOT modify the original students array
NOT modify any student object inside the array
NOT log anything or read global variables
return a new array of students
update the GPA only for the matching student
If the student is not found then return the original students array unchanged
 */
 let studentss = [
   { id: "S1", name: "Amina", gpa: 3.2 },
   { id: "S2", name: "Marko", gpa: 2.8 }
 ];

function updateStudentGpaPure(students, studentId, newGpa) {
    let newArray = [];
    
    
    for (let student of students) {
        if(student.id === studentId) {
            newArray.push({...student, gpa: newGpa});
        } else {
            newArray.push({...student});
        }
    }
    return newArray;
}
module.exports = {  updateStudentGpaPure,};

console.log("Original students array:", studentss);
console.log(updateStudentGpaPure(studentss, "S3", 3.6));