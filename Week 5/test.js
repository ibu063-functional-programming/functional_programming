const addLogging = require("./task1");
const once = require("./task2");
const not = require("./task3");
const unary = require("./task4");
const memoize = require("./task5");
const memoizeAdvanced = require("./task6");
const memoizeWithTracker = require("./task7");
const invert = require("./task8");
const debounce = require("./task9");


// Task 1
function calculateFinalGrade(midterm, final) {
  return midterm * 0.4 + final * 0.6;
}
const loggedCalculate = addLogging(calculateFinalGrade);
loggedCalculate(80, 90);

// Task 2
function initializeSystem() {
  console.log("System initialized");
  return { status: "ready" };
}
const initOnce = once(initializeSystem);
console.log("Init 1:", initOnce());
console.log("Init 2:", initOnce());

// Task 3
const students = [
  { id: "S1", name: "Amina", grade: 8 },
  { id: "S2", name: "Adnan", grade: 5 },
  { id: "S3", name: "Lejla", grade: 9 }
];
const isPassed = s => s.grade >= 6;
console.log("Not passed:", students.filter(not(isPassed)).map(s => s.name));

// Task 4
console.log(["123", "456", "789"].map(unary(parseInt))); // [123,456,789]

// Task 5
function calculateGPA(studentId) {
  console.log("Calculating GPA for:", studentId);
  return studentId.length * 1.5;
}
const memoGPA = memoize(calculateGPA);
console.log("GPA 1:", memoGPA("S1"));
console.log("GPA 2:", memoGPA("S1")); // should not log again

// Task 6
function calculateScholarship(studentId, year) {
  console.log("Calculating scholarship for:", studentId, year);
  return studentId.length * year;
}
const memoScholar = memoizeAdvanced(calculateScholarship);
console.log("Sch 1:", memoScholar("S1", 2026));
console.log("Sch 2:", memoScholar("S1", 2026)); // should not log again

// Task 7
function calculateBonus(points) {
    return points * 5;
}
const memoBonus = memoizeWithTracker(calculateBonus);
console.log(memoBonus(10)); // computed
console.log(memoBonus(10)); // cached
console.log(memoBonus.tracker);

// Task 8
const byNameAsc = (a, b) => a.name.localeCompare(b.name);
const sortedDesc = [...students].sort(invert(byNameAsc));
console.log("Sorted desc:", sortedDesc.map(s => s.name));

// Task 9
function searchStudents(query) {
  console.log("Searching for:", query);
}
const debouncedSearch = debounce(searchStudents, 1000);
debouncedSearch("A");
debouncedSearch("Am");
debouncedSearch("Ami");
debouncedSearch("Amina"); 