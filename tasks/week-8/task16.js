function fibC(n, cont) {
  if (n <= 1) {
    return cont(n); // base case
  } else {
    return fibC(n - 2, p =>
      fibC(n - 1, q =>
        cont(p + q)
      )
    );
  }
}

console.log(fibC(5, x => x));     // 5
fibC(6, console.log);             // 8
