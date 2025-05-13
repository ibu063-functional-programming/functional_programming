// ************ TASK DESCRIPTION ************
//? Maybe Wrapper

/*
*   From a pre-defined `Maybe` container that safely handles nullish values,
*   your task is to implement the two specific variants: `Just` and `Nothing`.
*
*   These two classes should behave as follows:
*   - `Just(x)` holds a valid, non-nullish value
*     - It must support `.map(fn)` which applies the function to its value
*     - It must implement `toString()` that returns: Just(value)
*
*   - `Nothing()` represents a missing or nullish value
*     - It must ignore `.map(fn)` and always return itself
*     - It must implement `toString()` that returns: Nothing
*
*   The `Maybe.of()` function is already implemented to help create
*   either a `Just` or a `Nothing` automatically, depending on the value.
*
*? Examples:
*? Just(5).map(x => x + 1) → Just(6)
*? Nothing().map(x => x + 1) → Nothing
*? Maybe.of("Hello").map(str => str.toUpperCase()) → Just("HELLO")
*? Maybe.of(null).map(x => x * 2) → Nothing
*? Maybe.of(undefined).map(x => x.toString()) → Nothing
*? Maybe.of(10).map(x => x / 2).map(x => x - 1) → Just(4)
*/

/* Reminder!!!
    In JavaScript, when you create a subclass using extends, you must call super() 
    in the constructor before accessing this. 
    This is required by the ECMAScript (JavaScript) specification.
    Without super(), this is not initialized in the subclass, and trying 
    to use this (like this.value = ...) will throw a ReferenceError
*/

// TODO: Implement Maybe, Just, and Nothing

class Maybe {

    static of(x) {
        return x === null || x === undefined ? new Nothing() : new Just(x);
    }
}

class Just extends Maybe {
    constructor(value){
        super()
        this.value = value;
    }
    map(fn){
        return new Just(fn(this.value))
    }
    toString(){
        return `Just(${this.value})`
    }
}

class Nothing extends Maybe {
    map(){
        return this;
    }

    toString(){
        return "Nothing"
    }
}  













// Below this comment any modification is prohibited.
module.exports = { Maybe, Just, Nothing };
