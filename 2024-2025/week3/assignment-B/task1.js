// ************ TASK DESCRIPTION ************

// Analyze the given function to determine whether it is pure. 
// If it is impure, refactor it into a pure function.
// If it is already pure, retain its original form.
// In either case you will need to create the function under the "TODO" comment

/*
*
*   function addOneIncremented(arr){
*       arr[arr.length] = arr[arr.length-1] + 1;
*   }
*
*/


// TODO (if needed)

const addOneIncremented = (arr) => {
    if (arr.length === 0) return [1]; 
    return [...arr, arr[arr.length - 1] + 1]; 
};





















// Below this comment any modification is prohibited. 
module.exports = addOneIncremented;
