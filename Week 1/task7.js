//Write a function findEven that returns the total of even numbers in an array.

function findEven (numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            total += numbers[i];
        }
    }
    return total;
}
console.log(findEven([1, 2, 3, 4, 5, 6])); // 12