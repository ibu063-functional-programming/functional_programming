const { isEligibleForExam, canRegister } = require("./task3.js");

const student = { id: "S1", name: "Amna", birthYear: 2006 };

console.log("Eligible (2026):", isEligibleForExam(student, 2026));
console.assert(isEligibleForExam(student, 2026) === true, "Eligibility check failed");

const holds = {
  S1: ["library_fine"],
  S2: [],
};

console.assert(canRegister({ id: "S2" }, holds) === true, "canRegister failed (should be true)");
console.assert(canRegister({ id: "S1" }, holds) === false, "canRegister failed (should be false)");
console.assert(canRegister({ id: "S3" }, holds) === true, "canRegister failed (missing student should be true)");

console.log("Task 3 correct");
