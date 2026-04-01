function initializeSystem() {
    console.log("System initialized");
    return { status: "ready" };
}
  
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if(!called) {
      called = true;
      result = fn(...args);
    }
    return result;  
  }   
}

module.exports = once;