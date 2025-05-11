/*
*   Write a function `withTiming(fn)` that:
*   - Takes a function `fn` as input
*   - Returns a **new function** that:
*     - Logs the time it takes to execute `fn`
*     - Returns the result from `fn`
*   - Must not modify `fn` directly
*
*? Example:
*? const slowAdd = (x, y) => { for(let i = 0; i < 1e6; i++){} return x + y; };
*? const timedAdd = withTiming(slowAdd);
*? timedAdd(3, 4); // Logs: "Execution time: X ms", returns 7
*/

// TODO: Implement withTiming

const withTiming = (fn) => (...args) => {
    const start = Date.now();
    const result = fn(...args)
    const end = Date.now();
    console.log(`Execution time: ${end-start}ms`);
    return result;
}
  




























// Below this comment any modification is prohibited.
module.exports = { withTiming };
