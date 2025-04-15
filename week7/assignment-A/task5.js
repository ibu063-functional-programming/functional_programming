// ************ TASK DESCRIPTION ************

// You are given a template object to handle a list of task durations in minutes:

/*
 *      const TimeTracker = (times) => ({
 *      filterLong: function (),
 *      convertToHours: function (), 
 *      totalTime: function (), 
 *      log: function () 
 * });
*/

/*
 ? Fill in each method using chaining to:
 ? Filter durations greater than 30 minutes
 ? Convert remaining durations to hours
 ? Sum the values and log the result
*/

// For input: [45, 20, 90, 15, 60] => output: [0.75, 1.5, 1]
//                                            Total Hours: 3.25


const TimeTracker = (times) => {
    let _times = times;
  
    return {

    // * example method:
      sayHi: function () {
        console.log("Hi from TimeTracker!");
        return this;
        // The `this` keyword refers to the object returned by TimeTracker.
        // It allows method chaining by returning `this` at the end of each method.
        // This is important so we can write code like tracker.sayHi().log();
      },

      // TODO -> other required methods

      filterLong: function () {
        _times = _times.filter(t => t > 30);
        return this;
      },
      convertToHours: function () {
        _times = _times.map(t => t / 60);
        return this;
      },
      totalTime: function () {
        const total = _times.reduce((sum, val) => sum + val, 0);
        console.log("Total Hours:", total);
        return this;
      },
      log: function () {
        console.log(_times);
        return this;
      }
    };
  };
  
  TimeTracker([45, 20, 90, 15, 60]) // one of the tests
    .filterLong()
    .convertToHours()
    .log()
    .totalTime();
  









  











// Below this comment any modification is prohibited.
module.exports = TimeTracker;
