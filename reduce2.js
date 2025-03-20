const sumAndLog = (x, y) => {
    console.log(`${x} + ${y} = ${x + y}`);
    return x + y;
};

myArray.reduce(sumAndLog, 0);