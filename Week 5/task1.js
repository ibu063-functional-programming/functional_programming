function calculateFinalGrade(midterm, final) {
    return midterm * 0.4 + final * 0.6;
  }

function addLogging(fn) {
  return function (...args) {
    console.log(`[LOG] Function: ${fn.name}`);
    console.log(`[LOG] Arguments: ${args.join(', ')}`);
    const result = fn(...args);
    console.log(`[LOG]: Returned: ${result}`);
    return result;
  }
  

}


module.exports = addLogging;
  