// A simple function to simulate an Observable that emits a timestamp every second.
function createTicker() {
  let intervalId;
  // Return an object that has a subscribe method.
  return {
    subscribe: function(observer) {
      intervalId = setInterval(() => {
        const currentTime = new Date();
        // If observer is a function, call it with the current time
        // (In a more complex implementation, observer could be an object with next/error/complete)
        if (typeof observer === 'function') {
          observer(currentTime);
        }
      }, 1000);

      // Return a subscription object with an unsubscribe method.
      return {
        unsubscribe: () => {
          clearInterval(intervalId);
        }
      };
    }
  };
}

// Usage:
const clockObservable = createTicker();
const subscription = clockObservable.subscribe(time => {
  console.log("Tick: " + time.toLocaleTimeString());
});

// After 5 seconds, unsubscribe to stop receiving ticks:
setTimeout(() => {
  subscription.unsubscribe();
  console.log("Stopped the clock.");
}, 5000);