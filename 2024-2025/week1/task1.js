const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 55 },
    { name: "Charlie", grade: 72 },
    { name: "Dave", grade: 40 }
];


// Imperative way
function filterStudentsImperative(students){
    let filtered = [];

    for (var i = 0; i < students.length; i++){   
        if(students[i].grade >= 60){
            filtered.push(students[i]);
        }
    }

    return filtered;
}


console.log("With imperative approach: ", filterStudentsImperative(students));

const filterDeclarative = (students) => students.filter(student => student.grade >= 60);

console.log("With declarative approach:", filterDeclarative(students));
