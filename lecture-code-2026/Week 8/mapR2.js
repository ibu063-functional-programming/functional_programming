const mapR2 = (arr, cb, i = 0, orig = arr) =>
  arr.length === 0
    ? []
    : [cb(arr[0], i, orig)].concat(
        mapR2(arr.slice(1), cb, i + 1, orig)
      );

const aaa = [1, 2, 4, 5, 7];
const senseless = (x, i, a) => x * 10 + i + a[i] / 10;

console.log(aaa.map(senseless));    // [10.1, 21.2, 42.4, 53.5, 74.7]
console.log(mapR2(aaa, senseless)); // [10.1, 21.2, 42.4, 53.5, 74.7]