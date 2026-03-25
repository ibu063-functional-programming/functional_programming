/*
Write a function getTotalEcts(courses) that returns the total ECTS. 
Return a string in the format: "Total ECTS: 15".
*/
const courses = [
  { code: "CS101", ects: 6 },
  { code: "CS102", ects: 5 },
  { code: "CS103", ects: 4 }
];

function getTotalEcts(courses) {
  const courseEcts = courses.map(course => course.ects);
  const sum = (x, y) => x + y;
  const totalEcts = courseEcts.reduce(sum, 0);
  return `Total ECTS: ${totalEcts}`;
}


module.exports = getTotalEcts;

console.log(getTotalEcts(courses));