const partialCurryByClosure = (fn) => {
  const curryize = (...args1) => (...args2) => {
    const allParams = [...args1, ...args2]; //[9, 22], [9,22, 60], [9, 22, 60, 12, 4]
    return allParams.length < fn.length
      ? curryize(...allParams)
      : fn(...allParams);
  };
  
  return curryize();
};

const nonsense = (a, b, c, d, e) =>  `${a}/${b}/${c}/${d}/${e}`;
const pcNonsense = partialCurryByClosure(nonsense);
const fix1And2 = pcNonsense(9, 22); // fix1And2 is now a ternary function
const fix3 = fix1And2(60); // fix3 is a binary function
const fix4and5 = fix3(12, 4); // fix4and5 === nonsense(9,22,60,12,4), "9/22/60/12/4"

//fix1And2(1, 2, 3)