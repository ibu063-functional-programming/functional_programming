/*
Assume one report is expensive, for example computeAtRiskScore(student, enrollments) 
(you can define a simple scoring rule, like missed grades or low average). 
Implement a generic higher-order function memoize(fn)that caches results 
based on arguments, then create memoizedAtRiskScore = memoize(computeAtRiskScore). 
Show in your script that repeated calls with the same inputs reuse cached results 
(e.g., using a counter variable outside the pure function only for demonstration 
in the testing harness). The goal is to connect “pure functions → safe caching/memoization” 
and why it’s harder with impure logic.
*/
const { isEligibleForExam } = require("./task3.js");

function memoize(fn) {
   // TO DO
   let cache = {};
   return function (...args) {
      const key = JSON.stringify(args);
      if (key in cache) {
         return cache[key];
      }
      const result = fn(...args);
      cache[key] = result;
      return result;
   }
}

function computeAtRiskScore(student, enrollmentList, currentYear) {
     // TO DO
     let score = 0;
     for(let e of enrollmentList) {
      if (e.studentId !== student.id) continue;
      if(e.status !== 'enrolled') continue;

      if (e.grade === null) {
         score += 1;
      } else if (e.grade < 60) {
         score += 2;
      }
      if (!isEligibleForExam(student, currentYear)) {
         score += 1;
      }
     }
     return score;
  }
  
const memoizedAtRiskScore = memoize(computeAtRiskScore);

module.exports = { memoize, memoizedAtRiskScore,};
