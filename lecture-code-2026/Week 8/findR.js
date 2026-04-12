const findR = (arr, cb) =>
  arr.length === 0
    ? undefined
    : !(0 in arr) || arr[0] === undefined
      ? findR(arr.slice(1), cb)
      : cb(arr[0])
        ? arr[0]
        : findR(arr.slice(1), cb);

let aaa = [1, 12, , , 5, 22, 9, 60];

const isTwentySomething = x => 20 <= x && x <= 29;
console.log(findR(aaa, isTwentySomething)); // 22

const isThirtySomething = x => 30 <= x && x <= 39;
console.log(findR(aaa, isThirtySomething)); // undefined