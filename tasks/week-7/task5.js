// Initial data array
const myArray = [15, 22, 7, 34, 3];

// --- Step 1: Define simple predicate and transformation functions ---
const greaterThan10 = x => x > 10;
const square = x => x * x;
const lessThan500 = x => x < 500;

// --- Step 2: Create transducer functions ---
// A transducer transforms one reducer into another reducer.

// Mapping transducer (mapTR): applies a function before reducing
const mapTR = fn => reducer => (accumulator, value) => 
  reducer(accumulator, fn(value));

// Filtering transducer (filterTR): includes values based on predicate
const filterTR = predicate => reducer => (accumulator, value) => 
  predicate(value) ? reducer(accumulator, value) : accumulator;

// --- Step 3: Define the final reducer function ---
const addToArray = (arr, value) => {
  arr.push(value);
  return arr;
};

// --- Step 4: Compose multiple transducers into a single reducer ---
const compose = (...fns) => initial => 
  fns.reduceRight((acc, fn) => fn(acc), initial);

// --- Step 5: Generalized transduce function ---
const transduce = (
  arr,                  // Input array
  transducers,          // Array of transducers
  reducer = addToArray, // Final reducer (default: add to array)
  initial = []          // Initial accumulator value
) => {
  // Create a single composed reducer from multiple transducers
  const composedReducer = compose(...transducers)(reducer);

  // Reduce input array using composed reducer
  return arr.reduce(composedReducer, initial);
};

// --- Step 6: Apply transducers to the input data ---
const result = transduce(myArray, [
  filterTR(greaterThan10), // Keep numbers greater than 10
  mapTR(square),           // Square each number
  filterTR(lessThan500)    // Keep numbers less than 500
]);

// --- Final Result ---
console.log(result); // Expected output: [225, 484]
