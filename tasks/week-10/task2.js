const withLogging = (fn) => {
  return (...args) => {
    console.log(`Calling function with arguments:`, args);
    const result = fn(...args);
    console.log(`Function returned:`, result);
    return result;
  };
};
const add = (x, y) => x + y;
const loggedAdd = withLogging(add);

loggedAdd(2, 3); 
// Console:
// Calling function with arguments: [2, 3]
// Function returned: 5
