function search(arr, key) {
  if (arr.length === 0) {
    return false; // base case: empty array
  } else if (arr[0] === key) {
    return true; // base case: found the key
  } else {
    return search(arr.slice(1), key); // recursive case
  }
}

console.log(search([1, 2, 3, 4], 3)); // true
console.log(search([], 5));          // false
console.log(search([9, 8, 7], 4));   // false
console.log(search([5, 4, 3, 2], 2)); // true
