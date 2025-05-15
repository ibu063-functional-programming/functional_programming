function buildEmailMessage(user) {
  return `Email sent to ${user.email}`;
}

function sendEmailWithLogger(user, logger) {
  const message = buildEmailMessage(user);
  logger(`Sending email to ${user.email}`);
  return message;
}

const user = { email: "test@example.com" };

// In real app:
sendEmailWithLogger(user, console.log);

// In test:
let capturedLog = "";
const fakeLogger = msg => { capturedLog = msg; };

const result = sendEmailWithLogger(user, fakeLogger);
console.assert(result === "Email sent to test@example.com", "Incorrect message");
console.assert(capturedLog === "Sending email to test@example.com", "Logger not called correctly");

console.log("Test passed");
