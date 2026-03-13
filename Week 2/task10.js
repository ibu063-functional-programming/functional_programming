/*
Write a function delayedMessage that:
Takes a callback
Calls it after 1 second with the message "Hello FP"
*/

function delayedMessage(callback) {
    setTimeout(() => callback("Hello FP"), 1000);
}

delayedMessage(message => console.log(message));