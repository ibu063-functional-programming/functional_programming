/*
You are given an array of student exam scores and a function 
that applies bonus points to a single score. Your task is to rewrite the bonus function 
in curried form so that the bonus amount can be fixed first, 
and then applied to individual scores.

After that, use the curried function together with map() to calculate updated scores, 
and then use reduce() to calculate the total score of all students.

Expected output:
console.log(updatedScores); // [65, 80, 85, 60]
console.log(totalScore);    // 290
*/
const scores = [60, 75, 80, 55];

const addBonus = (bonus, score) => score + bonus;

const addBonusCurried = bonus => score => score + bonus;

const updatedScores = scores.map(addBonusCurried(5));

const totalScore = updatedScores.reduce((total, score) => total + score, 0);

console.log(updatedScores); 
console.log(totalScore);   