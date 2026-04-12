const reduceR = (orig, cb, accum) => {
  const reduceLoop = (arr, accum, i) =>
    arr.length === 0
      ? accum
      : !(0 in arr) || arr[0] === undefined
        ? reduceLoop(arr.slice(1), accum, i + 1)
        : reduceLoop(
            arr.slice(1),
            cb(accum, arr[0], i, orig),
            i + 1
          );

  return reduceLoop(orig, accum, 0);
};

let bbb = [1, 2, , 5, 7, 8, 10, 21, 40]; // Note the hole at index 2

console.log(bbb.reduce((x, y) => x + y, 0));    // 94
console.log(reduceR(bbb, (x, y) => x + y, 0));  // 94