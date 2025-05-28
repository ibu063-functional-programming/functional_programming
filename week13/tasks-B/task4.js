// ************ TASK DESCRIPTION ************
//? Confirm function purity using console.assert

/*
* You are given a function `shout` that transforms a string to uppercase and adds an exclamation mark.
*
* Your task:
* - Write one or more console.assert statements to test if the function behaves like a pure function.
* - Each assertion must use the specified values and exact error messages below.
* - Do NOT modify the function definition or use custom messages.
*
* Your `console.assert` calls must include the following:
*
* 1. Assert that providing argument "hello" always returns the same result
*    If not, use the message: "Should return the same result every time"
*
* 2. Assert that providing argument "wow" returns `"WOW!"`
*    If not, use the message: "Should return capitalized string with exclamation"
*
* 3. Assert that the function does not mutate the original input or any external variable
*    If it did, provide the message "Shout should not modify any external variable"
*
* Your test file will check these exact calls, so the error message strings must match exactly.
*/

function shout(str) {
  return str.toUpperCase() + "!";
}


const input = "hello";
const result1 = shout(input);
const result2 = shout(input);

console.assert(result1 === result2, "Should return the same result every time");
console.assert(shout("wow") === "WOW!", "Should return capitalized string with exclamation");
console.assert(input === "hello", "Double should not modify any external variable");