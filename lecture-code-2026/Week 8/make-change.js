const makeChange = (n, bills) => {
  if (n < 0) {
    return 0; // no way of paying negative amounts
  } else if (n === 0) {
    return 1; // one single way of paying $0: with no bills
  } else if (bills.length === 0) {
    return 0; // no bills? no way of paying
  } else {
    return (
      makeChange(n, bills.slice(1)) + // exclude current bill
      makeChange(n - bills[0], bills) // include current bill
    );
  }
};

console.log(makeChange(64, [100, 50, 20, 10, 5, 2, 1]));
// Output: 969