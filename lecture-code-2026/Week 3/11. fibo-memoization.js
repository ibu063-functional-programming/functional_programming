const cache = [];

const fib2 = n => {
    if (cache[n] === undefined) {
        if (n === 0) {
            cache[0] = 0;
        } else if (n === 1) {
            cache[1] = 1;
        } else {
            cache[n] = fib2(n - 2) + fib2(n - 1);
        }
    }
    return cache[n];
};

console.log(fib2(10)); // 55, as before, but more quickly!

