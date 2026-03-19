/*
Add an enrollment “receipt” generator that depends on something 
impure (such as randomness). Implement generateReceiptId(getRandomNum) 
which returns a receipt ID string such as "R-123456". 
Do not call Math.random() directly inside this function. Instead, 
inject getRandomNum so the function can be tested deterministically 
by passing a fake function (for example, one that always returns 0.123).
Since getRandomNum() returns a decimal number between 0 and 1, 
multiply it by 1,000,000 and round it down to an integer (using the same 
rounding-down function you used in the Programming 1 course) before appending 
it to "R-". 
Then implement enrollWithReceipt(enrollments, enrollment, 
getRandomNum) which returns a new enrollment list where the newly added 
enrollment includes a receiptId. The function must remain pure and predictable 
when a controlled random generator is provided.

const enrollments = [
  { studentId: "S1", courseCode: "CS101", status: "enrolled", grade: 92 },
];
const newEnrollment = { studentId: "S2", courseCode: "CS101", status: "enrolled", grade: null };
*/

function generateReceiptId(getRandomNum) {
     // TO DO
   return "R-" + Math.floor(getRandomNum() * 1000000);
  }
  
  function enrollWithReceipt(enrollmentList, enrollment, getRandomNum = Math.random) {
     // TO DO
     const newEnrollment = {
      ...enrollment,
      receiptId: generateReceiptId(getRandomNum),
     }
     return [...enrollmentList, newEnrollment];
  }
  
module.exports = { generateReceiptId, enrollWithReceipt, };

  