// ************ TASK DESCRIPTION ************
//? Confirm function purity using console.assert

/*
* You are given a function double that returns twice the input.
*
* Your task:
* - Write one or more console.assert statements to test if the function behaves like a pure function.
* - Each assertion must use the specified values and exact error messages below.
* - Do NOT modify the function definition or use custom messages.
*
* Your `console.assert` calls must include the following:
*
* 1. Assert that providing argument 5 always returns the same result
*    If not, provide the message "Should return the same result every time".
*
* 2. Assert that providing argument 5 returns 8.
*    If not, provide the message "Should return 8"
*
* 3. Assert that the function does not modify an external variable
*    If it did, provide the message "Double should not modify external variable"
*
* Your test file will check these exact calls, so the error message strings must match exactly.
*/

function double(x) {
  return x * 2;
}

console.assert(
  double(5) === double(5),
  "Should return the same result every time"
);

console.assert(
  double(4) === 8,
  "Should return 8"
);

let y = 10;
const before = y;
double(y);
console.assert(
  y === before,
  "Double should not modify external variable"
);