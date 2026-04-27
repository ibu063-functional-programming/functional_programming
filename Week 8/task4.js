const students = [
    { id: 'S001', name: 'Amina Kovač',    gpa: 3.8, year: 2, credits: 62, status: 'active'   },
    { id: 'S002', name: 'Adnan Bešić',    gpa: 2.1, year: 4, credits: 98, status: 'active'   },
    { id: 'S003', name: 'Lejla Hadžić',   gpa: 3.5, year: 1, credits: 28, status: 'active'   },
    { id: 'S004', name: 'Omar Muratović', gpa: 1.8, year: 3, credits: 74, status: 'inactive' },
    { id: 'S005', name: 'Sara Softić',    gpa: 3.9, year: 2, credits: 60, status: 'active'   },
    { id: 'S006', name: 'Emir Čaušević',  gpa: 2.7, year: 3, credits: 80, status: 'active'   },
    { id: 'S007', name: 'Hana Alibašić',  gpa: 3.2, year: 1, credits: 24, status: 'active'   },
];
/*
The SIS administrator wants to know the total number of credits earned across all students. 
Implement reduceStudents(students, reducer, initialValue) 
recursively no Array.prototype.reduce, no loops. 
Then use your function to calculate the total credits of all students.
*/
function reduceStudents(students, reducer, initialValue) {
    if (students.length === 0) {
        return initialValue;
    } else {
        const [first, ...rest] = students;
        return reducer(reduceStudents(rest, reducer, initialValue), first);
    }
}


   
const totalCredits = reduceStudents(students, (acc, s) => acc + s.credits, 0);
console.log(totalCredits); // 426
   
const averageGPA = reduceStudents(students, (acc, s) => acc + s.gpa, 0) / students.length;
console.log(averageGPA.toFixed(2)); // 3.00
  

