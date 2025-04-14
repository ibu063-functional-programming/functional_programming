function findR(arr, callback) {
  if (arr.length === 0) {
    return undefined; // base case: not found
  } else if (callback(arr[0])) {
    return arr[0]; // found matching element
  } else {
    return findR(arr.slice(1), callback); // search in the rest
  }
}

console.log(findR([1, 3, 5, 8, 10], x => x % 2 === 0)); // 8
console.log(findR(["apple", "banana", "cherry"], x => x.startsWith("b"))); // "banana"
console.log(findR([1, 3, 5], x => x % 2 === 0)); // undefined
