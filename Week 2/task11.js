/*
Rewrite the previous task using a Promise instead of a callback. 
delayedMessage()
  .then(msg => console.log(msg));
*/
function delayedMessage() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hello FP"), 1000);
    });
}

delayedMessage()
    .then(msg => console.log(msg));