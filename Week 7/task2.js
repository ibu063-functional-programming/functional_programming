const { pipeline, filterActive, filterGoodGPA, getNames, sortAlpha, students } = require("./task1.js");

/*
Implement a tap(fn) utility function and use it to log the data at each stage of the pipeline from Task 1.  
Your tap() function should:
Accept a callback function fn
Return a new function that calls fn(x) on the value, then returns x unchanged
Not modify the data flowing through the pipeline
Example how to call function: 
*/

function tap(fn) {
  return function (x) {
    fn(x)
    return x;
  }
}

/*
const tap = fn => x => {
  fn(x);
  return x;
}
  */

const debugPipeline = pipeline(
  filterActive,
  tap(v => console.log('After filterActive: ', v)),
  filterGoodGPA,
  tap(v => console.log('After filterGoodGPA:', v)),
  getNames,
  tap(v => console.log('After getNames:     ', v)),
  sortAlpha,
  tap(v => console.log('After sortAlpha:    ', v)),
);
 
debugPipeline(students);

module.exports = {  tap, debugPipeline};