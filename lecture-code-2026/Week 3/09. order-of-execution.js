let mult = 1;
const f = (x) => {
    mult = - mult; 
    return mult;
};
const f2 = (x) => {
    mult = 0.75 * mult;
    return x * mult;
}
console.log(f(2)); // -1
console.log(f2(2)); // -1.5
console.log(f2(2)); // -1.125
console.log(f2(2)); // -1.5
console.log(f2(2)); // -1.5

console.log(f(2)); // 1
f(2) // -2
f(5) // 5
f(5) // -5
f(2) // 2
console.log(f(2) + f(5)); // 3
console.log(f(5) + f(2)); // -3  Different!


const add = (a, b) => a + b;

console.log(add(2,5)); // 7
console.log(add(5,2)); // 7
console.log(add(2,5) + add(5,2)); // 14  Same!
console.log(add(5,2) + add(2,5)); // 14  Same!
