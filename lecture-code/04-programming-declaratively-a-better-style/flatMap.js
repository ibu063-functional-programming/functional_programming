const names = [
    "Winston Spencer Churchill",
    "Plato",
    "Abraham Lincoln",
    "Socrates",
    "Charles Darwin",
];

const lastNames = names.flatMap((x) => {
    const s = x.split(" ");
    return s.length === 1 ? [] : s.splice(1);
});

console.log(lastNames);
// Output: [ 'Spencer', 'Churchill', 'Lincoln', 'Darwin' ]