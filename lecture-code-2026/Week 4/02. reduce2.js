const myArray = [22, 9, 60, 12, 4, 56];

const sumAndLog = (x, y) => {
    console.log(`${x} + ${y} = ${x + y}`);
    return x + y;
};

myArray.reduce(sumAndLog, 0);