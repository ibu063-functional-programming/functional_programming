const deepCopy = (obj) => {
  let aux = obj;
  if (obj && typeof obj === "object") {
    aux = new obj.constructor();
    Object.getOwnPropertyNames(obj).forEach((prop) => {
      aux[prop] = deepCopy(obj[prop]);
    });
  }
  return aux;
};

const getByPath = (arr, obj) => {
  if (arr[0] in obj) {
    return arr.length > 1
      ? getByPath(arr.slice(1), obj[arr[0]])
      : deepCopy(obj[arr[0]]);
  } else {
    return undefined;
  }
};

const data = {
  user: {
    address: {
      city: "Berlin",
    },
  },
};

console.log(getByPath(["user", "address", "city"], data)); // "Berlin"