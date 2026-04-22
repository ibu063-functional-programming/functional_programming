const findR = (arr, fn) =>
  arr.length === 0
    ? undefined
    :!(0 in  arr) || arr[0] === undefined
      ? findR(arr.slice(1), fn)
      : fn(arr[0]) //false ? 1: findR(arr.slice(1), fn)
        ? arr[0] //
        : findR(arr.slice(1), fn);

let aaa = [1, 12, , , 5, 22, 9, 60];

const isTwentySomething = x => 20 <= x && x <= 29;
console.log(findR(aaa, isTwentySomething)); // 22

const isThirtySomething = x => 30 <= x && x <= 39;
console.log(findR(aaa, isThirtySomething)); // undefined