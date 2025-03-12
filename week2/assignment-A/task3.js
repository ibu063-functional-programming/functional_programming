// ************ TASK DESCRIPTION ************

// Write a function fetchData that returns a Promise that resolves with "Data received" after 2 seconds.

// Clarification, if you type the following:
// fetchData().then(console.log);
// After 2 seconds it should output "Data received"



const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
};