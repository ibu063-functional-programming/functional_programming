/*
Add Timing
Implement addTiming(fn, { getTime, output }).
Use it to measure how long a recursive factorial or Fibonacci function takes.
Create custom getTime and output functions for testing.
// A recursive factorial function
*/
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Timing wrapper HOF
function addTiming(fn, { getTime = () => performance.now(), output = console.log } = {}) {
  return (...args) => {
    const start = getTime();
    try {
      const result = fn(...args);
      const end = getTime();
      output(`${fn.name} - normal exit ${end - start} ms`);
      return result;
    } catch (err) {
      const end = getTime();
      output(`${fn.name} - exception!! ${end - start} ms`);
      throw err;
    }
  };
}

// Custom getTime and output functions for test logs
const customTimer = {
  getTime: () => performance.now(),
  output: (msg) => console.log(`[Timer] ${msg}`)
};

// Wrap the factorial function with timing
const timedFactorial = addTiming(factorial, {
  getTime: customTimer.getTime,
  output: customTimer.output
});

// Test
console.log("Result:", timedFactorial(10));
//Output
//[Timer] factorial - normal exit 0.03179997205734253 ms
//Result: 3628800

