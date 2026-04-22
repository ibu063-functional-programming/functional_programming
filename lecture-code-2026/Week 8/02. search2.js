function search2(arr, key) {
  return arr.length === 0
    ? false
    : arr[0] === key || search2(arr.slice(1), key);
}

/*
const search2 = (arr, key) =>
  arr.length === 0
    ? false
    : arr[0] === key || search2(arr.slice(1), key);
*/

