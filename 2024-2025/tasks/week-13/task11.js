// No formatUser function yet – this will fail
try {
  const user = { firstName: "john", lastName: "doe" };
  const result = formatUser(user);
  console.assert(result === "John Doe", 'Test Failed: Expected "John Doe"');
} catch (e) {
  console.log("Test correctly fails because formatUser is not defined yet.");
}

function formatUser(user) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase();
  return `${capitalize(user.firstName)} ${capitalize(user.lastName)}`;
}

const user = { firstName: "john", lastName: "doe" };
const result = formatUser(user);
console.assert(result === "John Doe", 'Test Failed: Expected "John Doe"');
console.log("Test Passed: formatUser returned 'John Doe'");


const capitalize = str =>
  str.length === 0 ? "" : str[0].toUpperCase() + str.slice(1).toLowerCase();

const formatUserComposition = user =>
  [user.firstName, user.lastName]
    .map(capitalize)
    .join(" ");

// Lowercase
console.assert(formatUserComposition({ firstName: "alice", lastName: "smith" }) === "Alice Smith", "Alice Smith failed");

// All caps
console.assert(formatUserComposition({ firstName: "BOB", lastName: "JONES" }) === "Bob Jones", "Bob Jones failed");

// Mixed case
console.assert(formatUserComposition({ firstName: "mARy", lastName: "lEe" }) === "Mary Lee", "Mary Lee failed");

// Edge case: empty names
console.assert(formatUserComposition({ firstName: "", lastName: "" }) === " ", "Empty name failed");

console.log("All formatUser tests passed.");

