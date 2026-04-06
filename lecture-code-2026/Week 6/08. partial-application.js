const nonsense = (a, b, c, d, e) =>
    `${a}/${b}/${c}/${d}/${e}`;

const fix2and5 = (a, c, d) => nonsense(a, 22, c, d, 1960);

const fixLast = (a, c) => fix2and5(a, c, 9);

//a = 1
//b =
//c = 2
//d = 9
//e = 

//fix2and5(1, 2, 9)
//nonsense(1, 22, 2, 9, 1960)

console.log(fix2and5(1, 2)); //nonsense(1, 22, 2, undefined, 1960)

console.log(fixLast(1, 2)); //fix2and5(1, 2, 9) => nonsense(1, 22, 2, 9, 1960)