// === TRY IT YOURSELF — SOLUTIONS ===

// ========================================
// 1. Add a student "Diana" with scores [88, 92, 85]
// ========================================

// --- In Approach 1 (Imperative) ---
// You have to modify TWO separate arrays and hope the indexes match:
let students = ["Alice", "Bob", "Charlie", "Diana"];
let scores = [[90, 85, 92], [70, 75, 68], [95, 88, 91], [88, 92, 85]];
// ^ If you accidentally put Diana's scores at wrong index — bug!

let results = [];
for (let i = 0; i < students.length; i++) {
  let total = 0;
  for (let j = 0; j < scores[i].length; j++) {
    total = total + scores[i][j];
  }
  let average = total / scores[i].length;
  let grade;
  if (average >= 90) grade = "A";
  else if (average >= 80) grade = "B";
  else if (average >= 70) grade = "C";
  else grade = "F";
  results.push({ name: students[i], average: average, grade: grade });
}
console.log("Approach 1:", results);


// --- In Approach 2 (Functional) ---
// Just add one object to the array — name and scores stay together:
const studentData = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [70, 75, 68] },
  { name: "Charlie", scores: [95, 88, 91] },
  { name: "Diana", scores: [88, 92, 85] },  // ← just add this line
];

const average = (numbers) =>
  numbers.reduce((sum, n) => sum + n, 0) / numbers.length;

const letterGrade = (avg) =>
  avg >= 90 ? "A" : avg >= 80 ? "B" : avg >= 70 ? "C" : "F";

const processStudent = (student) => ({
  name: student.name,
  average: average(student.scores),
  grade: letterGrade(average(student.scores)),
});

const results2 = studentData.map(processStudent);
console.log("Approach 2:", results2);

// Output for Diana: { name: "Diana", average: 88.33, grade: "B" }


// ========================================
// 2. Change the grading scale (add "B+" for 85+)
// ========================================

// --- In Approach 1 (Imperative) ---
// You have to find the grading logic INSIDE the loop and edit it:
let results3 = [];
for (let i = 0; i < students.length; i++) {
  let total = 0;
  for (let j = 0; j < scores[i].length; j++) {
    total = total + scores[i][j];
  }
  let avg = total / scores[i].length;
  let grade;
  if (avg >= 90) grade = "A";
  else if (avg >= 85) grade = "B+";   // ← added here, buried in the loop
  else if (avg >= 80) grade = "B";
  else if (avg >= 70) grade = "C";
  else grade = "F";
  results3.push({ name: students[i], average: avg, grade: grade });
}
console.log("Approach 1 with B+:", results3);


// --- In Approach 2 (Functional) ---
// Edit ONE function — everything else stays the same:
const letterGradeV2 = (avg) =>
  avg >= 90 ? "A"
  : avg >= 85 ? "B+"    // ← just add this line
  : avg >= 80 ? "B"
  : avg >= 70 ? "C"
  : "F";

const processStudentV2 = (student) => ({
  name: student.name,
  average: average(student.scores),
  grade: letterGradeV2(average(student.scores)),
});

const results4 = studentData.map(processStudentV2);
console.log("Approach 2 with B+:", results4);

// Diana: average 88.33 → now gets "B+" instead of "B"
// Charlie: average 91.33 → still "A"
// Alice: average 89 → still "B+" (89 >= 85)


// ========================================
// 3. Which approach was easier to modify?
// ========================================

console.log(`
ANSWER: Approach 2 (Functional) was easier both times.

Adding Diana:
  - Approach 1: Edit two separate arrays, keep indexes in sync
  - Approach 2: Add one object — done

Changing grading scale:
  - Approach 1: Find the if/else buried inside nested loops, edit carefully
  - Approach 2: Edit one small function (letterGrade) — nothing else changes

This is the core benefit of FP:
  - Small, independent functions
  - Each does one job
  - Change one piece without breaking others
`);