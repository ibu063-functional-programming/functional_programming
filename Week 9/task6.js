// TO DO 
// Building blocks

// Operations

const students = [
    { id: 'S001', name: 'Ana Kovacevic',   year: 2, gpa: 9.2, status: 'active',   courses: ['FP', 'OOP', 'DB'] },
    { id: 'S002', name: 'Emir Hodzic',     year: 1, gpa: 6.5, status: 'inactive', courses: ['Math', 'Eng'] },
    { id: 'S003', name: 'Lejla Mustafic',  year: 3, gpa: 8.8, status: 'active',   courses: ['FP', 'Algo', 'AI'] },
    { id: 'S004', name: 'Damir Selimovic', year: 2, gpa: 7.1, status: 'active',   courses: ['DB', 'Net'] },
    { id: 'S005', name: 'Nina Bajric',     year: 1, gpa: 9.7, status: 'active',   courses: ['FP', 'Math', 'Eng'] },
    { id: 'S006', name: 'Tarik Omerovic',  year: 4, gpa: 5.9, status: 'inactive', courses: ['Thesis'] },
    { id: 'S007', name: 'Sara Ibrahimovic',year: 3, gpa: 8.4, status: 'active',   courses: ['AI', 'ML', 'FP'] },
];

const getField = (key) => (obj) => obj[key];

const setField = (key) => (value) => (obj) => ({
  ...obj,
  [key]: value,
});

const lensProp = (key) => ({
  getter: getField(key),
  setter: setField(key),
});

const view = (lens) => (obj) =>
  lens.getter(obj);

const set = (lens) => (newVal) => (obj) =>
  lens.setter(newVal)(obj);

const over = (lens) => (fn) => (obj) =>
  lens.setter(fn(lens.getter(obj)))(obj);

const gpaLens  = lensProp('gpa');
const nameLens = lensProp('name');

const ana = students[0]; // { id:'S001', name:'Ana Kovacevic', gpa:9.2, ... }

console.log(view(gpaLens)(ana)); // 9.2

const promoted = set(gpaLens)(10.0)(ana);
console.log(promoted.gpa);  // 10
console.log(ana.gpa);       // 9.2 <-- unchanged


const withBonus = over(gpaLens)(g => Math.min(10, +(g + 0.3).toFixed(1)))(ana);
console.log(withBonus.gpa); // 9.5


const shouted = over(nameLens)(n => n.toUpperCase())(ana);
console.log(shouted.name);  