// ************ TASK DESCRIPTION ************
//? Strategy

/*
*   Write a function `operate` that:
*   - Takes a function `strategy`, and two numbers `a` and `b`
*   - Applies the strategy function to `a` and `b`
*   - Returns the result
*
*? Example:
*? operate((x, y) => x + y, 2, 3) → 5
*? operate((x, y) => x * y, 2, 3) → 6
*/

// TODO: Implement operate

const operate = (strategy, a, b) => strategy(a, b);




// Below this comment any modification is prohibited.
module.exports = { operate };
