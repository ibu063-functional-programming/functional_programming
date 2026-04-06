const courses = [
  { code: "CS101", name: "Introduction to Web Programming", ects: 6 },
  { code: "CS102", name: "Data Structures", ects: 5 },
];

function formatCourseLabels(courses){ 
    const newarray = courses.map((v) => v.code + " - " + v.name + " (ECTS " + v.ects + ")") 
    return newarray; 
}

console.log(formatCourseLabels(courses))