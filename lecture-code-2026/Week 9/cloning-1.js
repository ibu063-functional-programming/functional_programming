const oldObject = {
 d: 22,
 m: 9,
 o: { c: "MVD", i: "UY", f: { a: 56 } },
};
const newObject = {
 d: oldObject.d,
 m: oldObject.m,
 o: {
 c: oldObject.o.c,
 i: oldObject.o.i,
 f: { a: oldObject.o.f.a },
 },
};

console.log(oldObject);

console.log(newObject);