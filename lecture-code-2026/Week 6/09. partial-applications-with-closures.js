const nonsense = (a, b, c, d, e) =>
 `${a}/${b}/${c}/${d}/${e}`;

const fix2and5 = partial(nonsense)(
 undefined,
 22,
 undefined,
 undefined,
 1960
);
fix2and5(1, 2, 9); //nonsense(1, 22, 2, 9, 1960)

function partial(fn) {
  const partialize = (...args1) => (...args2) => {
    const combined = [...args1];
    for (let i = 0; i < combined.length && args2.length; i++) {
      if (combined[i] === undefined) {
        combined[i] = args2.shift(); 
      }
    }

    //undefined, 2 (args1 - combined)
    // 'A' (args2)
    //'A', 2 

    const allParams = [...combined, ...args2];

    return allParams.includes(undefined) || allParams.length < fn.length
      ? partialize(...allParams)
      : fn(...allParams);
  };

  return partialize();
}

const make3 = (a, b, c) => `${a}:${b}:${c}`;

const f0 = partial(make3);
const f1 = f0(undefined, 2);
const f2 = f1("A");
const f3 = f2("Z");

//undefined, 2, A, Z
//A, 2, Z

console.log(f3);

const another = f1("1", "3") //undefined, 2 : 1, 3 => 1, 2, 3
console.log("Another:");
console.log(another);

const another2 = f1("5", "10") //undefined, 2 : 5, 10 => 5, 2, 10
console.log("Another 2:");
console.log(another2);