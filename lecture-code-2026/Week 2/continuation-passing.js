function add(x, y, continuation) {
    continuation(x + y);
}
add(2, 3, console.log); // Logs 5

function add2(x, y) {
    return x + y;
}
const result = add2(2, 3);
console.log(result); // Logs 5