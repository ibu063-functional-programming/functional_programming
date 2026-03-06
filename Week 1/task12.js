//Create an arrow function that takes an array of numbers and returns the sum of all numbers. 

const arraySum = (numbers) => {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
console.log(arraySum([1, 2, 3, 4, 5])); // 15
