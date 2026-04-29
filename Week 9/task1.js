const students = [
    { id: 'S001', name: 'Ana Kovacevic',   year: 2, gpa: 9.2, status: 'active',   courses: ['FP', 'OOP', 'DB'] },
    { id: 'S002', name: 'Emir Hodzic',     year: 1, gpa: 6.5, status: 'inactive', courses: ['Math', 'Eng'] },
    { id: 'S003', name: 'Lejla Mustafic',  year: 3, gpa: 8.8, status: 'active',   courses: ['FP', 'Algo', 'AI'] },
    { id: 'S004', name: 'Damir Selimovic', year: 2, gpa: 7.1, status: 'active',   courses: ['DB', 'Net'] },
    { id: 'S005', name: 'Nina Bajric',     year: 1, gpa: 9.7, status: 'active',   courses: ['FP', 'Math', 'Eng'] },
    { id: 'S006', name: 'Tarik Omerovic',  year: 4, gpa: 5.9, status: 'inactive', courses: ['Thesis'] },
    { id: 'S007', name: 'Sara Ibrahimovic',year: 3, gpa: 8.4, status: 'active',   courses: ['AI', 'ML', 'FP'] },
  ];
  
// dati 
// const topStudent = (arr) => arr.sort((a, b) => b.gpa - a.gpa).pop();

// TO DO
const topStudent = (arr) =>
  [...arr].sort((a, b) => a.gpa - b.gpa).pop();

console.log(topStudent(students).name); // Nina Bajric
console.log(students[0].name);          // Ana Kovacevic