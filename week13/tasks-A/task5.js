// ************ TASK DESCRIPTION ************
//? Confirm function purity using console.assert

/*
* You are given a function `sanitizeEmail` that:
* - Trims leading/trailing whitespace
* - Converts the email to lowercase
* - Removes invisible zero-width spaces (Unicode \u200B)
*
* This is used in a login system to normalize email input.
*
* Your task:
* - Write `console.assert` statements to test if this function behaves like a pure function.
* - Each assertion must use the specified values and exact error messages below.
* - Do NOT modify the function definition or use custom messages.
*
* Your `console.assert` calls must include the following:
*
* 1. Check if calling `sanitizeEmail("  User@Email.com  ")` returns "user@email.com"
*    Use this message if not: "Should trim and lowercase the email"
*
* 2. Check if calling `sanitizeEmail("john\u200B@example.com")` returns "john@example.com"
*    Use this message if not: "Should remove zero-width characters"
*
* 3. Check if calling `sanitizeEmail("test@abc.com")` returns the same result every time
*    Use this message if not: "Should return the same result for the same input"
*
* 4. Check if the original input is not mutated:
*    let original = "  MyEmail@Domain.com  ";
*    sanitizeEmail(original);
*    console.assert(original === "  MyEmail@Domain.com  ", "Should not mutate the original string");
*
* Your test file will check these exact calls, so the error message strings must match exactly.
*/

function sanitizeEmail(email) {
  return email.trim().replace(/\u200B/g, "").toLowerCase();
}


console.assert(
  sanitizeEmail("  UsEr@Gmail.com  ") === "user@gmail.com",
  "Should trim and lowercase the email"
);

console.assert(
  sanitizeEmail("user@\u200Bgmail.com") === "user@gmail.com",
  "Should remove zero-width characters"
);

console.assert(
  sanitizeEmail("  user@example.com\u200B ") === sanitizeEmail("  user@example.com\u200B "),
  "Should return the same result for the same input"
);

let original = "  test@domain.com ";
sanitizeEmail(original);
console.assert(
  original === "  test@domain.com ",
  "Should not mutate the original string"
);