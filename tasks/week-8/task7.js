function filterR(arr, callback) {
  if (arr.length === 0) {
    return []; // base case: empty array
  } else {
    const rest = filterR(arr.slice(1), callback);
    if (callback(arr[0])) {
      return [arr[0]].concat(rest); // include this element
    } else {
      return rest; // exclude this element
    }
  }
}

console.log(filterR([1, 2, 3, 4, 5], x => x % 2 === 0)); // [2, 4]
console.log(filterR(["cat", "dog", "cow"], x => x.startsWith("c"))); // ["cat", "cow"]
