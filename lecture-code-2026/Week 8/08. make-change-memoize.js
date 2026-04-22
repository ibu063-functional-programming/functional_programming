const memoize4 = (fn) => {
  const cache = {};
  return (...args) => {
    const strX = JSON.stringify(args); 
    if (strX in cache) {
      return cache[strX];
    } else {
      return (cache[strX] = fn(...args));
    }
  };
};

const makeChange = memoize4((n, bills) => {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else if (bills.length === 0) {
    return 0;
  } else {
    return (
      makeChange(n, bills.slice(1)) +
      makeChange(n - bills[0], bills)
    );
  }
});

console.log(makeChange(64, [100, 50, 20, 10, 5, 2, 1]));
// Output: 969