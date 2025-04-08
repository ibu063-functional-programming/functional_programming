// ************ TASK DESCRIPTION ************

// Write a function flexibleCompose(fn) that curries any function and collects arguments 
// until enough are provided to call the original function. 
// Then, apply those arguments in reverse order (like right-to-left composition).

/*

  function mix(a, b, c) {
    return `${a}-${b}-${c}`;
  }

* const composed = flexibleCompose(mix);
* console.log(composed("C")("B")("A"));      // A-B-C
* console.log(composed("Z", "Y")("X"));      // X-Y-Z
*/


function flexibleCompose(fn, ...args) {
  return (...newArgs) => {
    const allArgs = [...args, ...newArgs];
    return allArgs.length >= fn.length
      ? fn(...allArgs.slice(0, fn.length).reverse())
      : flexibleCompose(fn, ...allArgs);
  };
}





// Below this comment any modification is prohibited. 
module.exports = flexibleCompose;