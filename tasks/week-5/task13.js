/*
Throttle
Write throttle(fn, delay) and simulate rapid button clicks to ensure the function runs only once 
per time window.
*/
// Throttle: only runs fn at most once per delay
function throttle(fn, delay = 300) {
  let waiting = false;
  return (...args) => {
    if (!waiting) {
      waiting = true;
      fn(...args);
      setTimeout(() => {
        waiting = false;
      }, delay);
    }
  };
}

// Example: simulated button click handler
function handleClick() {
  console.log(`Button clicked at ${new Date().toLocaleTimeString()}`);
}

// Wrap it
const throttledClick = throttle(handleClick, 1000);

// Simulate rapid button clicks
let clickInterval = setInterval(throttledClick, 200);

// Stop after 5 seconds
setTimeout(() => clearInterval(clickInterval), 5000);
//Output
/*
Button clicked at 12:00:01
Button clicked at 12:00:02
Button clicked at 12:00:03
Button clicked at 12:00:04
Button clicked at 12:00:05
*/

