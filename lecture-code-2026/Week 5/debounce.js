function debounce(fn, delay = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const log = debounce((msg) => console.log(Date.now(), msg), 500);

log("call 1"); // canceled by call 2
log("call 2"); // canceled by call 3
log("call 3"); // fires after 500ms (last one wins)

setTimeout(() => log("call 4"), 1000); // fires after 1500ms
setTimeout(() => log("call 5"), 1100); // cancels call 4, fires after 1600ms