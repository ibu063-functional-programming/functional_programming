function quicksort(arr) {
  if (arr.length < 2) {
    return arr; // base case: empty or single-element array
  } else {
    const pivot = arr[0];
    const smaller = arr.slice(1).filter(x => x < pivot);
    const greaterEqual = arr.slice(1).filter(x => x >= pivot);
    return [...quicksort(smaller), pivot, ...quicksort(greaterEqual)];
  }
}

console.log(quicksort([22, 9, 60, 12, 4, 56]));
// Output: [4, 9, 12, 22, 56, 60]
