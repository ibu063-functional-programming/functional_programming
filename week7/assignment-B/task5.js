// ************ TASK DESCRIPTION ************

// You are given a template object to process a list of test scores:

/*
 *      const ScoreProcessor = (scores) => ({
 *      filterPassing: function (),     // keep only scores >= 50
 *      boostScores: function (),       // add 5 bonus points to each
 *      calculateAverage: function (),  // compute average of scores
 *      log: function ()                // log the current scores
 * });
*/

/*
 ? Fill in each method using chaining:
 ? Filter scores >= 50
 ? Add 5 to each remaining score
 ? Compute and log the average
*/

// For input: [42, 78, 55, 90, 33] => output: [83, 60, 95]
//                                            Average Score: 79.33


const ScoreProcessor = (scores) => {
  let _scores = scores;

  return {
    filterPassing: function () {
      _scores = _scores.filter(score => score >= 50);
      return this;
    },
    boostScores: function () {
      _scores = _scores.map(score => score + 5);
      return this;
    },
    calculateAverage: function () {
      const avg = _scores.reduce((a, b) => a + b, 0) / _scores.length;
      console.log("Average Score:", avg.toFixed(2));
      return this;
    },
    log: function () {
      console.log(_scores);
      return this;
    }
  };
};

// Example usage:
// ScoreProcessor([42, 78, 55, 90, 33])
//   .filterPassing()
//   .boostScores()
//   .log()
//   .calculateAverage();

module.exports = ScoreProcessor;

















// Below this comment any modification is prohibited.
module.exports = ScoreProcessor;