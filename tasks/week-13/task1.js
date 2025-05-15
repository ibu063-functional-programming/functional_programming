function logMessagePure(logArray, message) {
  return [...logArray, message];
}
const originalLog = ["Init complete"];
const updatedLog = logMessagePure(originalLog, "User logged in");

console.log("Original:", originalLog);   // → ["Init complete"]
console.log("Updated:", updatedLog);     // → ["Init complete", "User logged in"]