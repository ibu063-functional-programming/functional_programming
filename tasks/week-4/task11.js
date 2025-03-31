//Extract Domain Names from Emails
const extractDomains = (emails) => emails.map(email => email.split("@")[1]);

// Example usage:
console.log(extractDomains(["alice@gmail.com", "bob@yahoo.com"])); 
// Output: ["gmail.com", "yahoo.com"]

