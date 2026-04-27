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
The SIS needs a function that searches for a student by their ID 
without using any built-in array methods (no .find(), no .filter(), no loops). 
Implement the function findStudentById(students, id) recursively using the decrease-and-conquer strategy:
Base case 1: the array is empty → return null (student not found)
Base case 2: the first element has the matching id → return it
Recursive case: search the rest of the array
*/
function findStudentById(students, id) {
  if (students.length === 0) {
    return null;
  }
  if (students[0].id === id) {
    return students[0];
  }
  return findStudentById(students.slice(1), id);
}

console.log(findStudentById(students, 'S003'));
console.log(findStudentById(students, 'S999'));
