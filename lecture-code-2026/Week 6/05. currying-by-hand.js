const sum = (x, y) => {
 if (x !== undefined && y !== undefined) {
    return x + y;
 } else if (x !== undefined && y == undefined) {
    return (z) => sum(x, z);
 } else { // x,y both undefined
    return sum;
 }
};

console.log(sum(3, 5)); // 8; did you expect otherwise?
const add3 = sum(3);
console.log("add 3:");
console.log(add3(5)); // 8
console.log(sum(3)(5)); // 8
console.log(add3(6));
console.log(add3(9));
console.log(add3(10));

console.log("add 6:");
const add6 = sum(6);
console.log(add6(6));
console.log(add6(9));
console.log(add6(10));