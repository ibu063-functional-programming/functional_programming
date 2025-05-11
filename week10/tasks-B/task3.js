/*
*   Write a higher-order function `wrapSafe(fn)` that:
*   - Takes a function `fn`
*   - Returns a new function that:
*     - Tries to call `fn` with given arguments
*     - Catches and logs any errors using console.error
*     - Returns "ERROR" if an exception occurs
*
*? Example:
*? const risky = (x) => { if (x < 0) throw "Oops"; return x * 2; }
*? const safe = wrapSafe(risky);
*? safe(2); → 4
*? safe(-1); → "ERROR" and logs the error
*/

// TODO: Implement wrapSafe


const wrapSafe = (fn) => (...input) => {
    try {
        const result = fn(...input);
        return result;
    } catch (error) {
        console.error("Something broke!");
        return "ERROR";
    }
}
























// Below this comment any modification is prohibited.
module.exports = { wrapSafe };
