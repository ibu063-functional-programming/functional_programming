//Calculating several values at once

const average3 = (arr) => {
    const sc = arr.reduce(
        (ac, val) => ({
            sum: val + ac.sum,
            count: ac.count + 1,
        }),
        { sum: 0, count: 0 }
    );
    return sc.sum / sc.count;
};

const myArray = [22, 9, 60, 12, 4, 56];
console.log(average3(myArray)); // 27.166667