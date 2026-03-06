/*Create a function findLargest that takes an array of numbers. 
Find and return the largest value using a loop.
*/

function findLargest(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
console.log(findLargest([3, 5, 7, 2, 8])); // 8

const findLargestArrow = (numbers) => {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
console.log(findLargestArrow([3, 5, 7, 2, 8])); // 8