// ************ TASK DESCRIPTION ************
//? Wrapper

/*
*   Write a higher-order function `wrapObjectValues(fn)` that:
*   - Takes a transformation function `fn`
*   - Returns a new function that accepts a flat object (no nested objects or arrays)
*   - Applies `fn` to each value of the object
*   - Logs each transformed key and value using `console.log`
*   - Returns a **new object** without modifying the original
*
*? Example:
*? const double = x => x * 2;
*? const obj = { a: 1, b: 2 };
*? wrapObjectValues(double)(obj)
*? → { a: 2, b: 4 }
*? And logs:
*? Transforming a: 1 → 2
*? Transforming b: 2 → 4
*/

// TODO: Implement wrapObjectValues



function wrapObjectValues(fn) {
    return function (obj) {
      const result = {};
      for (const key in obj) {
        if (Object.hasOwn(obj, key)) {
          const original = obj[key];
          const transformed = fn(original);
          console.log(`Transforming ${key}: ${original} → ${transformed}`);
          result[key] = transformed;
        }
      }
      return result;
    };
}






// Below this comment any modification is prohibited.
module.exports = { wrapObjectValues };