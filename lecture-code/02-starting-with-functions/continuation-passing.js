function add(x, y, continuation) {
    continuation(x + y);
}
add(2, 3, console.log); // Logs 5