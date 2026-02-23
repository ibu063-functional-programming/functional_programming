function mapR(arr, callback) {
  if (arr.length === 0) {
    return []; // base case: empty array
  } else {
    return [callback(arr[0])].concat(mapR(arr.slice(1), callback));
  }
}
console.log(mapR([1, 2, 3], x => x * 2)); // [2, 4, 6]
console.log(mapR(["a", "b", "c"], x => x.toUpperCase())); // ["A", "B", "C"]