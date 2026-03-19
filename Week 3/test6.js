const { generateReceiptId, enrollWithReceipt } = require("./task6.js");

function fakeRandom() {
  return 0.123456; // deterministic
}

const receiptId = generateReceiptId(fakeRandom);
console.log("Receipt ID:", receiptId);

// This assert expects you used *1000000 + floor in generateReceiptId
// If your version returns "R-0.123456", change the expected value accordingly.
console.assert(receiptId === "R-123456", "generateReceiptId failed (expected R-123456)");

const enrollments = [
  { studentId: "S1", courseCode: "CS101", status: "enrolled", grade: 92 },
];

const newEnrollment = { studentId: "S2", courseCode: "CS101", status: "enrolled", grade: null };
const updated = enrollWithReceipt(enrollments, newEnrollment, fakeRandom);

console.log("Original enrollments:", enrollments);
console.log("Updated enrollments:", updated);

console.assert(enrollments.length === 1, "Original enrollments mutated!");
console.assert(updated.length === 2, "enrollWithReceipt failed (should add new enrollment)");
console.assert(updated[1].receiptId === "R-123456", "receiptId not added correctly");

console.log("Task 6 correct");
