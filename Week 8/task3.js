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
The SIS report module needs to transform each student record into a formatted summary string. 
Implement mapStudents(students, transform) recursively, no Array.prototype.map, no loops. 
The transform function to apply to each student:
*/
const toSummary = s => `[${s.id}] ${s.name} | Year ${s.year} | GPA: ${s.gpa} | Credits: ${s.credits}`;

const mapStudents = (students, transform) => {
  if (students.length === 0) {
    return [];
  } else {
    return [transform(students[0])].concat(
      mapStudents(students.slice(1), transform)
    );
  }
};
  

console.log(mapStudents(students, toSummary));

