function calculateGPA(studentId) {
  console.log("Calculating GPA for:", studentId);
  return studentId.length * 1.5;
}

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    } else { 
      const result = fn(...args);
      cache[args] = result;
      return result;
    }
  }
}
const memoGPA = memoize(calculateGPA);
console.log("GPA 1:", memoGPA("S1"));
console.log("GPA 2:", memoGPA("S1"));



module.exports = memoize;