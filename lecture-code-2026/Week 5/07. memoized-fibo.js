const memoize = (fn) => {
 const cache = {};
 return (x) =>
 x in cache ? cache[x] : (cache[x] = fn(x));
};
// Memoized Fibonacci
const fib = memoize(function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
});

// Timing helpers (if not already defined)
const myGet = () => performance.now();

const myPut = (text, name, tStart, tEnd) => {
  console.log(`${name} - ${text} ${tEnd - tStart} ms`);
};

const myLogger = {
  getTime: myGet,
  output: myPut,
};

function addTiming(fn, { getTime = myGet, output = myPut } = {}) {
  return function (...args) {
    const tStart = getTime();
    try {
      const valueToReturn = fn(...args);
      output("normal exit", fn.name, tStart, getTime());
      return valueToReturn;
    } catch (thrownError) {
      output("exception!!", fn.name, tStart, getTime());
      throw thrownError;
    }
  };
}

// Test runner
const testFib = (n) => fib(n);

// Timing tests
addTiming(testFib)(45); // ~ very fast with memoization
addTiming(testFib)(40);
addTiming(testFib)(35);
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
const fib2 = memoize(fibonacci);
fib2(45); // ~ very fast with memoization
fib2(40);
fib2(35); 
  