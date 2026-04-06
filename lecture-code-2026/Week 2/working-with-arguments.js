function sum(...args) { //[1, 2, 3, 4]
    return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

console.log(sum(1, 2)); // 3

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55


function sum(a, b, c, d) {
    return a + b + c + d;
}   
let a = [1, 2, 3, 4];
console.log(sum(a[0], a[1], a[2], a[3])); // 10
console.log(sum(...a)); // 10