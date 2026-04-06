function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fib(n - 2) + fib(n - 1);
  }
}
const memoize = (fn) => {
 const cache = {};
 return (x) =>
  x in cache ? cache[x] : (cache[x] = fn(x));
};