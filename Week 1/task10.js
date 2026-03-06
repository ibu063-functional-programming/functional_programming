/*
Create an arrow function that takes an array of numbers 
and returns a new array with only positive numbers.
*/

const onlyPositive = (numbers) => {
    let positives = [];
    for (num of numbers) {
        if(num > 0){
            positives.push(num);
        }
    }
    return positives;
}
console.log(onlyPositive([-2, -1, 0, 1, 2, 3])); // [1, 2, 3]