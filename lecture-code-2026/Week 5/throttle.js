const throttle = (fn, delay = 1000) => {
  let timer;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = undefined;
      }, delay);
      fn(...args);
    }
  };
};

let ourF = (msg) => console.log(Date.now(), msg)
const log = throttle(ourF, 500);
//const log = throttle((msg) => console.log(Date.now(), msg), 500);

log("call 1"); // should fire
log("call 2"); // ignored
log("call 3"); // ignored
log("call 2"); // ignored
log("call 2"); // ignored
log("call 2"); // ignored
log("call 2"); // ignored
log("call 2"); // ignored
log("call 2"); // ignored

setTimeout(() => log("call 4"), 600);  // should fire (after delay)
setTimeout(() => log("call 5"), 700);  // ignored (still within window of call 4)
setTimeout(() => log("call 6"), 1200); // should fire