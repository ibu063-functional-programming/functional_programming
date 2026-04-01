const isPassed = student => student.grade >= 6;

function not(fn) {
    return function(...args) {
        return !fn(...args);
    }
}
  
module.exports = not;