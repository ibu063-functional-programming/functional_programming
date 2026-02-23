const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

function mergeArrays(array1, array2){
    let unique = new Set([...arr1, ...arr2]);
    return [...unique];
}

console.log(mergeArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5]