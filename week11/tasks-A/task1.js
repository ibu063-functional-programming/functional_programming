// ************ TASK DESCRIPTION ************
//? Functor Construction

/*
*   Build a container called `Box` that wraps a single value.
*
*   The container must:
*   - Store the value privately
*   - Provide a `map` method to apply a function to the stored value
*   - Implement `toString()` to help visualize the wrapped value (format in the example below)
*   - Implement `valueOf()` to have the option of retrieving the value
*
*   The goal is to simulate **functor** behavior without exposing internal details.
*
*? Example:
*? Box(5).map(x => x + 2).toString() → "Box(7)"
*/

// TODO: Implement Box

class Box {
    constructor(value){
        this.value = value;
    }

    map(fn){
        return new Box(fn(this.value))
    }

    toString(){
        return `Box(${this.value})`
    }

    valueOf(){
        return this.value;
    }
}








const doubled = new Box(5).map(x => x * 2);
console.log(doubled.toString())














// Below this comment any modification is prohibited.
module.exports = { Box };