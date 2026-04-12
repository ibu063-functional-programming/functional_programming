function compose(...fns) {
  return (input) => fns.reduceRight((acc, fn) => fn(acc), input);
}
// Example: Count ODT files in a directory (simulation)
function getDir(path) {
  // Suppose this returns an array of filenames from the directory
  // For example purposes, we return a fixed array.
  return ['doc1.odt', 'doc2.pdf', 'doc3.odt', 'doc4.odt'];
}

function filterOdt(files) {
  return files.filter(file => file.endsWith('.odt'));
}

function count(arr) {
  return arr.length;
}

const countOdtFilesPointfree = compose(
  count,
  filterOdt,
  getDir
);

console.log(countOdtFilesPointfree('/some/path'));