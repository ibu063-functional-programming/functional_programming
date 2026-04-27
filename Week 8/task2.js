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
 The SIS dashboard must display only active students. 
 You may NOT use Array.prototype.filter or any loop. 
 Implement filterActive(students) recursively. Rules:
If the array is empty, return []
If the first student is active, include them and recurse on the rest
Otherwise, skip them and recurse on the rest
*/
function filterActive(students) {
    if (students.length === 0) {
        return [];
    }
    if (students[0].status === 'active') {
        return [students[0]].concat(filterActive(students.slice(1)));
    }
    return filterActive(students.slice(1));

}

   
console.log(filterActive(students).map(s => s.name));

   

  


