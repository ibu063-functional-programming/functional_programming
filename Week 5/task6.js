function calculateScholarship(studentId, year) {
  console.log("Calculating scholarship for:", studentId, year);
  return studentId.length * year;
} 

function memoizeAdvanced(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  }
}
  
const memoScholar = memoizeAdvanced(calculateScholarship);
console.log("Sch 1:", memoScholar("S1", 2026));
console.log("Sch 2:", memoScholar("S1", 2026));
  
module.exports = memoizeAdvanced;