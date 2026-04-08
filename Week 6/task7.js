/*
Now implement a generic partial function partial(fn) 
that should allow fixing some arguments while leaving others undefined. 
Use undefined as a placeholder for missing arguments. 

Example:
const make3 = (a, b, c) => `${a}:${b}:${c}`;
const p = partial(make3);
const f1 = p(undefined, 2);
console.log(f1("A")("Z"));
Output should be: A:2:Z
*/
function partial(fn) {
    const partialize = (...args1) => (...args2) => {
        console.log("old args: ", args1)
        console.log("new args: ", args2)

        for (let i = 0; i < args1.length && args2.length; i++) {
            if (args1[i] === undefined) {
                args1[i] = args2.shift();
            }
        }

        const allParams = [...args1, ...args2];
        console.log("merged args: ", allParams)

        if (allParams.includes(undefined) || allParams.length < fn.length) {
            console.log("not ready yet, returning new function\n")
            return partialize(...allParams);
        } else {
            console.log("enough arguments, calling original function\n") 
            return fn(...allParams);
        }
    };
    return partialize();
}

const make3 = (a, b, c) => `${a}:${b}:${c}`;

const p = partial(make3);

const f1 = p(undefined, 2);

console.log(f1("A")("Z"));
