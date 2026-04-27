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
The SIS needs an alphabetical student listing. 
Implement mergeSortByName(students) using the divide-and-conquer merge sort algorithm, 
no built-in .sort(), no loops inside merge.
Algorithm outline:
Base case: if the array has 0 or 1 element, it is already sorted — return it.
Find the midpoint and split the array into left and right halves.
Recursively sort each half.
Merge the two sorted halves into a single sorted array (implement merge(left, right) recursively).
Hint: The merge(left, right) helper itself should be recursive:
If either array is empty, return the other.
Compare the first elements; take the smaller one and recurse on the rest.
*/

function mergeSortByName(students) {
    if (students.length <= 1) return students; // Base case: 0 or 1 element is already sorted
    const mid = Math.floor(students.length / 2);
    const left = mergeSortByName(students.slice(0, mid));
    const right = mergeSortByName(students.slice(mid));

    return merge(left, right);

    function merge (left, right) {
        if (left.length === 0) return right; // If left is empty, return right
        if (right.length === 0) return left; // If right is empty, return left

        if (left[0].name.localeCompare(right[0].name) <= 0) {
            return [left[0], ...merge(left.slice(1), right)];
        } else {
            return [right[0], ...merge(left, right.slice(1))];
        }
    }
}

  
console.log(mergeSortByName(students).map(s => s.name));
