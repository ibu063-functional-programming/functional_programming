function memoize3(fn) { //fn = calculateAge
  const cache = {}; // {'2026,1990': 34}
  const PRIMITIVES = ["number", "string"];
  return function (...args) { //2026, 1990
    const strX =
      args.length === 1 && PRIMITIVES.includes(typeof args[0])
        ? args[0]
        : JSON.stringify(args); // "2026,1990"

    return strX in cache
      ? cache[strX]
      : (cache[strX] = fn(...args)); //calculateAge(2026, 1990)
  };
}

function calculateAge(current, birth) {
  return current - birth;
}

const memoizedCalculateAge = memoize3(calculateAge);

console.log(memoizedCalculateAge(2026, 1990)); // 34
console.log(memoizedCalculateAge(2026, 1990)); // Cached result: 34
console.log(memoizedCalculateAge(2026, 1985)); // 39
console.log(memoizedCalculateAge(2026, 1985)); // Cached result: 39

function calculateSum(a, b){
  return a + b;
}

const memoizedCalculateSum = memoize3(calculateSum);

console.log(memoizedCalculateSum(5, 3)); // 8
console.log(memoizedCalculateSum(5, 3)); // Cached result: 8