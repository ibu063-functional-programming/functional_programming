// ************ TASK DESCRIPTION ************
//? Confirm function purity using console.assert

/*
* You are given a function `normalizeUsername` that:
* - Trims leading/trailing whitespace
* - Replaces spaces with underscores
* - Converts the username to lowercase
*
* This is used to standardize usernames in your system.
*
* Your task:
* - Write `console.assert` statements to test if this function behaves like a pure function.
* - Each assertion must use the specified values and exact error messages below.
* - Do NOT modify the function definition or use custom messages.
*
* Your `console.assert` calls must include the following:
*
* 1. Check if calling `normalizeUsername("  Alice Smith  ")` returns "alice_smith"
*    Use this message if not: "Should trim, lowercase, and replace spaces"
*
* 2. Check if calling `normalizeUsername("BOB")` returns "bob"
*    Use this message if not: "Should convert to lowercase"
*
* 3. Check if calling `normalizeUsername("john_doe")` returns the same result every time
*    Use this message if not: "Should return the same result for the same input"
*
* 4. Check that the function does not modify the original input or any external variable
*    If it did, provide the message "Should not mutate the original string"
*
*/

function normalizeUsername(name) {
  return name.trim().replace(/\s+/g, "_").toLowerCase();
}

console.assert(normalizeUsername("  Alice Smith  ") === "alice_smith", "Should trim, lowercase, and replace spaces");
console.assert(normalizeUsername("BOB") === "bob", "Should convert to lowercase");
console.assert(normalizeUsername("john_doe") === normalizeUsername("john_doe"), "Should return the same result for the same input");

let original = "  benjamin peljto        ";
normalized = normalizeUsername(original);
console.assert(original ===  "  benjamin peljto        ", "Should not mutate the original string");
