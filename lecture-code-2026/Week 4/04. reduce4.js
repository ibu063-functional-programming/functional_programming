//Calculating several values at once
const myArray = [22, 9, 60, 12, 4, 56];
const average3 = (arr) => {
    const sumCounter = arr.reduce(
        (x, y) => ({
            sum: x.sum + y,
            count: x.count + 1,
        }),
        { sum: 0, count: 0 }
    );
    return sumCounter.sum / sumCounter.count;
};
console.log(average3(myArray)); // 27.166667