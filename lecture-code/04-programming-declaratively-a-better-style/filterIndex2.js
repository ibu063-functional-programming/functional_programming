[1, 2, NaN, 4].findIndex((x) => x === NaN); // -1 


[1, 2, NaN, 4].findIndex(x => isNaN(x)); // 2