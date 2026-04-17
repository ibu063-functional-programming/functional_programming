/*
The SIS processes a large list of student scores. 
The standard chained approach creates multiple intermediate arrays. 
Your task is to rewrite the transformation using transducers for a single-pass solution. 
You are given the following data and standard (inefficient) implementation:
*/
const scores = [45, 82, 60, 91, 38, 74, 55, 88, 41, 95];

// Standard chained version (creates 3 intermediate arrays):
const resultChained = scores.filter(s => s >= 60).map(s => Math.round(s * 1.05)).filter(s => s <= 100).map(s => s + ' pts');       
//console.log(resultChained);

/*
Implement mapTR and filterTR transducer helpers, 
then use compose() to build a single transducer that performs all four steps in one pass. 
Use reduce() to apply the transducer. Expected output (identical to chained version): 
[ '86 pts', '63 pts', '96 pts', '78 pts', '92 pts', '100 pts' ]
*/

const mapTR = transform => reducer => (array, value) => reducer(array, transform(value));
/*
function mapTR (transform) {
    return function (reducer) {
        return function (array, value) {
            return reducer(array, transform(value));
        }
    }
} 
  */

const filterTR = predicate => reducer => (array, value) => predicate(value) ? reducer(array, value) : array;

const compose = (...fns) => input => fns.reduceRight(
    (currentVal, fn) => fn(currentVal), input
);

const append = (array, value) => {
  array.push(value);
  return array;
};

const transducer = compose (
    filterTR(s => s >= 60),
    mapTR(s => Math.round(s * 1.05)),
    filterTR(s => s <= 100),
    mapTR(s => s + ' pts')
);
 
// Single-pass reduce — no intermediate arrays created

const addToArray = (array, value) => (array.push(value), array);
/*
function addToArray (array, vlaue) {
    array.push(value);
    return array;
}
*/
const result = scores.reduce(transducer(addToArray), []);
 
console.log(result);


