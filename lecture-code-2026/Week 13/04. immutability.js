// An impure function that mutates the array
function addUserImpure(userList, newUser) {
  userList.push(newUser);       // side effect: modifies the original array
  return userList;
}

// A pure, immutable version of adding a user
function addUserPure(userList, newUser) {
  return [...userList, newUser];// returns a new array, original unchanged
}

const baseUsers = ["Alice", "Bob"];

// Test 1
let users = [...baseUsers];
addUserImpure(users, "Carol");
console.assert(users.includes("Carol"), "Carol should be added (impure)");
// Now users array is ["Alice", "Bob", "Carol"]
console.assert(users.length === 2, "Original list changed");
// Test 2 (supposed to start fresh, but accidentally reusing `users`)
addUserImpure(users, "Dave");
console.assert(users.includes("Dave"), "Dave should be added (impure)");
// If we mistakenly reused `users`, it's now ["Alice","Bob","Carol","Dave"] including Carol from before

// Using the pure version in tests
const baseUsers2 = ["Alice", "Bob"];

// Test 1
let result1 = addUserPure(baseUsers2, "Carol");
console.assert(result1.includes("Carol"), "Carol should be added (pure)");
console.assert(baseUsers2.length === 2, "Original list should remain unchanged (pure)");

// Test 2 (using the same base data again)
let result2 = addUserPure(baseUsers2, "Dave");
console.assert(result2.includes("Dave"), "Dave should be added (pure)");
console.assert(baseUsers2.length === 2, "Original list still unchanged (pure)");