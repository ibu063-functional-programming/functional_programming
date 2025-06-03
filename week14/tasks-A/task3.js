// ************ TASK 3: Debounced Input Logger (Simulated Stream) ************

/*
* You are building a logging utility that simulates how real-time search or input
* fields often behave in modern applications.
*
* You will need to:
* - Implement a `logInput(value)` function.
* - Internally debounce (wait for a pause in typing) using a 500ms delay.
* - On each call to `logInput`, reset the timer.
* - If no new input comes within 500ms, log the latest value to the console.
*
* You must use:
* - `setTimeout` to delay the log.
* - `clearTimeout` to cancel the previous timer if input continues.
*
* This kind of functionality is extremely common in real applications:
*   - Autocomplete fields
*   - Live form validation
*   - Real-time filters/search boxes
*
* Example:
* logInput("H");
* setTimeout(() => logInput("He"), 100);
* setTimeout(() => logInput("Hel"), 200);
* setTimeout(() => logInput("Hell"), 400);
* setTimeout(() => logInput("Hello"), 600);
*
* Output (after 500ms of inactivity): "User stopped typing: Hello"
*/

let debounceTimer;

function logInput(value) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    console.log("User stopped typing:", value);
  }, 500);
}


// Below this comment any modification is prohibited.
module.exports = { logInput };