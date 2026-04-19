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

let oldObject = {
 d: 22,
 m: 9,
 o: { c: "MVD", i: "UY", f: { a: 56 } },
};
let newObject = deepCopy(oldObject);
newObject.d = 8888;
newObject.o.f.a = 9999;
console.log(newObject); // {d:8888, m:9, o:{c:"MVD", i:"UY", f:{a:9999}}}
console.log(oldObject); // {d:22, m:9, o:{c:"MVD", i:"UY", f:{a:56}}} -- unchanged!