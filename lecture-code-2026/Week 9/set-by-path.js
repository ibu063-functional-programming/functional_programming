const setByPath = (arr, value, obj) => {
  if (!(arr[0] in obj)) {
    obj[arr[0]] = arr.length === 1
      ? null
      : Number.isInteger(+arr[1])
      ? []
      : {};
  }

  if (arr.length > 1) {
    return setByPath(arr.slice(1), value, obj[arr[0]]);
  } else {
    obj[arr[0]] = value;
    return obj;
  }
};

const myObj = {};
setByPath(["a", "b", "c"], 123, myObj);
console.log(myObj);  // { a: { b: { c: 123 } } }

setByPath(["x", "0", "y"], "hello", myObj);
console.log(myObj);  // { a: { b: { c: 123 } }, x: [ { y: "hello" } ] }