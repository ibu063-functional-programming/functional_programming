const mapR3 = (orig, cb) => {
  const mapLoop = (arr, i) =>
    arr.length === 0
      ? []
      : [cb(arr[0], i, orig)].concat(
          mapLoop(arr.slice(1), i + 1)
        );

  return mapLoop(orig, 0);
};

const aaa = [1, 2, 4, 5, 7];
const senseless = (x, i, a) => x * 10 + i + a[i] / 10;

console.log(mapR3(aaa, senseless));
// Output: [10.1, 21.2, 42.4, 53.5, 74.7]