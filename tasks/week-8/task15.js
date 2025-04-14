function factC(n, cont) {
  if (n === 0) {
    return cont(1); // base case: call continuation with 1
  } else {
    return factC(n - 1, x => cont(n * x)); // pass a new continuation
  }
}
console.log(factC(5, x => x));       // 120
factC(6, console.log);               // 720
