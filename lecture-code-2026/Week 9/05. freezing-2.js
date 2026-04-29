const myObj3 = {
 d: 22,
 m: 9,
 o: { c: "MVD", i: "UY", f: { a: 56 } },
};
Object.freeze(myObj3);
console.log(myObj3); // {d:22, m:9, o:{c:"MVD", i:"UY", f:{ a:56}}}


myObj3.d = 8888; // won't work, as earlier
myObj3.o.f.a = 9999; // oops, does work!!
console.log(myObj3); // {d:22, m:9, o:{c:"MVD", i:"UY", f:{ a:9999 }}}
