/*
Now implement a generic curry utility by writing a function curry(fn).
This function  should convert any function with multiple parameters into 
a curried version and should allow usage like:

const multiply = (a, b, c) => a * b * c;
const curriedMultiply = curry(multiply);
curriedMultiply(2)(3)(4) 

And the output should be: 24
*/

function curry(fn) {
    return function curried(...args) {
        console.log("curried called with: ", args);        
        if(args.length >= fn.length) {
            console.log("enough arguments, calling originam function")
            return fn(...args);
        } else {
            console.log('not enough arguments, returning a new function')
            return function (...nextArgs) {
                console.log('next function called with: ', nextArgs)
                return curried(...args, ...nextArgs);
            }
        }
    }
}

const multiply = (a, b, c) => a * b * c;
const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4));

