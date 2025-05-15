function addAge(user, age) {
  return { ...user, age };
}

const originalUser = { name: "Alice" };
const updatedUser = addAge(originalUser, 30);

console.log("Original:", originalUser); // → { name: "Alice" }
console.log("Updated:", updatedUser);   // → { name: "Alice", age: 30 }
