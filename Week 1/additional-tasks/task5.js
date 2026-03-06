//Write a function that merges two arrays and removes duplicate values using the spread operator.

function mergeArrays(arr1, arr2) {
    const merged = [...arr1, ...arr2];
    const unique = new Set(merged);

    return [...unique];
}

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
console.log(mergeArrays(arr1, arr2)); // [1, 2, 3, 4, 5]