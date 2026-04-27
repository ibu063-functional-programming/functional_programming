const students = [
    { id: 'S001', name: 'Amina Kovač',    gpa: 3.8, year: 2, credits: 62, status: 'active'   },
    { id: 'S002', name: 'Adnan Bešić',    gpa: 2.1, year: 4, credits: 98, status: 'active'   },
    { id: 'S003', name: 'Lejla Hadžić',   gpa: 3.5, year: 1, credits: 28, status: 'active'   },
    { id: 'S004', name: 'Omar Muratović', gpa: 1.8, year: 3, credits: 74, status: 'inactive' },
    { id: 'S005', name: 'Sara Softić',    gpa: 3.9, year: 2, credits: 60, status: 'active'   },
    { id: 'S006', name: 'Emir Čaušević',  gpa: 2.7, year: 3, credits: 80, status: 'active'   },
    { id: 'S007', name: 'Hana Alibašić',  gpa: 3.2, year: 1, credits: 24, status: 'active'   },
];
// Iterative – given. Do NOT modify this function.
const allCreditsEligibleIterative = (students) => {
    for (let i = 0; i < students.length; i++) {
      const required = students[i].year * 30;
      if (students[i].credits < required) return false;
    }
    return true;
  };

/*
Write allCreditsEligibleRecursive(students) that produces exactly 
the same results as the iterative version, but uses recursion and no loops. 
Think carefully about the base cases:
What does an empty array mean for this check?
When should you return false immediately?
When do you recurse?
*/
// Recursive version

function allCreditsEligibleRecursive(students) {
    if (students.length === 0) {
        return true; // Base case: empty array means all students are eligible
    }
    const required = students[0].year * 30;
    if (students[0].credits < required) {
        return false; // If the first student is not eligible, return false immediately
    }
    return allCreditsEligibleRecursive(students.slice(1)); // Recurse on the rest of the array
}
   
  console.log(allCreditsEligibleIterative(students));  // false
  console.log(allCreditsEligibleRecursive(students));  // false
   
  const passingStudents = students.filter(s => s.credits >= s.year * 30);
  console.log(allCreditsEligibleIterative(passingStudents));  // true
  console.log(allCreditsEligibleRecursive(passingStudents));  // true
  
  