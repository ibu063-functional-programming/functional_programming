// ************ TASK DESCRIPTION ************
//? Task 2: Reactive Counter Stream with Unsubscribe (PDF-style)

/*
* You are simulating a simple stream that emits increasing numbers over time.
*
* Your task:
* - Write a function `createCounterStream()` that:
*     - Emits a number every 1000ms (0, 1, 2, ...)
*     - Accepts a callback function when subscribed
*     - Returns a subscription object with an `unsubscribe()` method
*
* Constraints:
* - Use `setInterval` to emit values.
* - No need for a full observer object — just a simple callback function.
* - Avoid using Date/time objects.
*
* Example:
* const stream = createCounterStream();
* const sub = stream.subscribe(n => console.log("Received:", n));
* setTimeout(() => sub.unsubscribe(), 4000); // emits 0, 1, 2, 3 then stops
*/

function createCounterStream() {
  let intervalId;

  return {
    subscribe(callback) {
      let count = 0;

      intervalId = setInterval(() => {
        if (typeof callback === 'function') {
          callback(count++);
        }
      }, 1000);

      return {
        unsubscribe: () => clearInterval(intervalId)
      };
    }
  };
}






// Below this comment any modification is prohibited.
module.exports = { createCounterStream };

