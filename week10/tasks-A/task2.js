// ************ TASK DESCRIPTION ************
//? Wrapper

/*
*   Write a function `withLogging` that:
*   - Takes a function `fn` as input
*   - Returns a **new function** that:
*     - Logs the arguments it was called with
*     - Logs the returned result
*   - Does not modify the original function
*
*? Example:
*? const add = (x, y) => x + y;
*? const loggedAdd = withLogging(add);
*? loggedAdd(2, 3); // Logs: "Calling with: [2, 3]", "Result: 5"
*/

// TODO: Implement withLogging

const withLogging = (fn) => (...args) => {
    console.log("Calling with:", args);
    const result = fn(...args);
    console.log("Result:", result);
    return result;
};  



// Below this comment any modification is prohibited.
module.exports = { withLogging };
