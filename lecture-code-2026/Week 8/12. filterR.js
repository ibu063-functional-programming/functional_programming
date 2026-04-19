const filterR = (orig, cb) => {
  const filterLoop = (arr, i) =>
    arr.length === 0
      ? []
      : !(0 in arr) || arr[0] === undefined || !cb(arr[0], i, orig)
        ? filterLoop(arr.slice(1), i + 1)
        : [arr[0]].concat(filterLoop(arr.slice(1), i + 1));

  return filterLoop(orig, 0);
};

const maybeNums = [1, undefined, 3, undefined, 5, 8, 9];
const isOdd = (x, i, a) => x % 2 === 1;

console.log(filterR(maybeNums, isOdd)); // [1, 3, 5, 9]