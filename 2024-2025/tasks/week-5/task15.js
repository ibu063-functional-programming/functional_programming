/*
Promisify
Write promisify(fn) and apply it to a callback-based function like fs.readFile.
Use then() and catch() to process the result.
*/
const fs = require('fs');

// Promisify utility
function promisify(fn) {
  return (...args) =>
    new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
}

// Example usage
const readFile = promisify(fs.readFile);

readFile("example.txt", "utf8")
  .then((data) => console.log("File content:", data))
  .catch((err) => console.error("Error:", err));

