const oldObject = {
 d: 22,
 m: 9,
 o: { c: "MVD", i: "UY", f: { a: 56 } },
};
const newObject2 = Object.assign({}, oldObject);
newObject2.d = 8888;
newObject2.o.f.a = 9999;
console.log(newObject2); // {d:8888, m:9, o: {c:"MVD", i:"UY", f: {a:9999}}} -- ok
console.log(oldObject); // {d:22, m:9, o: {c:"MVD", i:"UY", f: {a:9999}}} -- oops!!

