// ************ TASK DESCRIPTION ************
//? Task 2 Variant: Simulated Temperature Sensor Stream

/*
* You are simulating a temperature sensor that emits fake temperature readings over time.
*
* Your task:
* - Implement a function `createTemperatureSensor()` that:
*     - Emits a simulated temperature reading every 1000ms (e.g., 20°C, 21°C, etc.).
*     - Accepts a callback function when subscribed.
*     - Returns a subscription object with an `unsubscribe()` method.
*
* Constraints:
* - Use `setInterval` to simulate repeated sensor readings.
* - Each value can be a number (e.g., starting at 20 and increasing by 1 each second).
* - No need for real-time or randomness—just fake readings.
* - Do not use any Date/time objects.
*
* Example:
* const sensor = createTemperatureSensor();
* const sub = sensor.subscribe(temp => console.log("Temp:", temp));
* setTimeout(() => sub.unsubscribe(), 4000); // emits 20, 21, 22, 23 then stops
*/

function createTemperatureSensor() {
  let intervalId;

  return {
    subscribe(callback) {
      let temperature = 20;

      intervalId = setInterval(() => {
        if (typeof callback === 'function') {
          callback(temperature++);
        }
      }, 1000);

      return {
        unsubscribe: () => clearInterval(intervalId)
      };
    }
  };
}

// Below this comment any modification is prohibited.
module.exports = { createTemperatureSensor };