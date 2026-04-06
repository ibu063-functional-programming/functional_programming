function compose(...fns) {
  return (...args) =>
    fns.reduceRight((result, fn) => fn(result), fns.pop()(...args));
}

const getDir = () => ['file1.odt', 'file2.txt', 'file3.odt'];
const filterOdt = files => files.filter(f => f.endsWith('.odt'));
const count = arr => arr.length;

const countOdtFiles = compose(
  count,
  filterOdt,
  getDir
);

console.log(countOdtFiles()); // Output: 2