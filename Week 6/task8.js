/*
Partial currying allows passing multiple arguments at once, 
but still returns functions until all arguments are provided. 
Write a function partialCurry that accepts any number of arguments 
and returns new functions until all arguments are provided. 

Example usage:
const combine = (a, b, c, d) => `${a}-${b}-${c}-${d}`;
const pc = partialCurry(combine);
console.log(pc(1, 2)(3, 4));

And the output is 1-2-3-4
*/

function partialCurry(fn) {
    const curryize = (...args1) => (...args2) => {
        console.log("new args: ", args2)
        const allParams = [...args1, ...args2]
        console.log("all args: ", allParams)

        if (allParams.length < fn.length) {
            console.log("not enough yet, returning new function\n");
            return curryize(...allParams)
        } else { 
            console.log("enough arguments, calling original function\n");
           return fn(...allParams)
        }
    }
    return curryize();
}

const combine = (a, b, c, d) => `${a}-${b}-${c}-${d}`;
const pc = partialCurry(combine);
console.log(pc(1, 2)(3, 4));
