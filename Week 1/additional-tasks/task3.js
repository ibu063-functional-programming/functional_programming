//Write a recursive function to compute the sum of all elements in an array.

function recursiveSum(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + recursiveSum(arr.slice(1));
    }
}
console.log(recursiveSum([1, 2, 3, 4, 5])); // 15