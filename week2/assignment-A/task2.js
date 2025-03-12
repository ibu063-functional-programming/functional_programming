// ************ TASK DESCRIPTION ************

// Write a function "sumAll" using rest parameters that takes ANY number of arguments and returns their sum.



const sumAll = (...numbers) => {
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    return sum;
}