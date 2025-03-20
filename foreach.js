const students = ["Alice", "Bob", "Charlie", "David"];

// Using forEach to log each student's name along with their index
students.forEach((student, index, array) => {
    console.log(`Student ${index + 1}: ${student}`);
});

// Another example: Accumulating total name length using forEach
let totalNameLength = 0;
students.forEach((student) => {
    totalNameLength += student.length;
});

console.log(`Total length of all student names: ${totalNameLength}`);