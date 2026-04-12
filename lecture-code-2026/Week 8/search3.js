const search3 = (arr, key) =>
  !!arr.length &&
  (arr[0] === key || search3(arr.slice(1), key));