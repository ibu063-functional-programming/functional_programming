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
A junior developer wrote a recursive quicksort to rank students by GPA (descending). 
The function has three bugs. Find and fix all of them so the output matches the expected result.
Instructions: Do NOT rewrite the function from scratch. 
Find the exact lines that are wrong and correct only those lines. 
Add a comment next to each fix explaining what was wrong.
*/

// BROKEN – do not rewrite, only fix the bugs
const sortByGPADesc = (arr) => {
    if (arr.length < 2) return arr;         
   
    const pivot = arr[0];                   //bug here --> should be the first element
    const left  = arr.slice(1).filter(s => s.gpa < pivot.gpa);   //bug here --> should be < 
    const right = arr.slice(1).filter(s => s.gpa >= pivot.gpa);  //bug here --> should be >=
   
    return [
      ...sortByGPADesc(right),
      pivot,
      ...sortByGPADesc(left),              // line E – bug here?
      
    ];
  };
   


// TO DO 

  
  
console.log(sortByGPADesc(students).map(s => `${s.name}: ${s.gpa}`));

