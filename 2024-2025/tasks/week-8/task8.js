function reduceR(arr, callback, initial) {
  if (arr.length === 0) {
    return initial; // base case: return accumulated result
  } else {
    const [head, ...tail] = arr;
    const next = callback(initial, head);
    return reduceR(tail, callback, next); // recursive step with updated accumulator
  }
}
console.log(reduceR([1, 2, 3, 4], (acc, x) => acc + x, 0)); // 10
console.log(reduceR(["a", "b", "c"], (acc, x) => acc + x, "")); // "abc"
