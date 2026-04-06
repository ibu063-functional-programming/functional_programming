function addLogging(fn, logger = console.log.bind(console)) {
  return function(...args) {
    logger(`entering ${fn.name}(${args})`);
    try {
      const valueToReturn = fn(...args);
      logger(`exiting ${fn.name} => ${valueToReturn}`);
      return valueToReturn;
    } catch (thrownError) {
      logger(`exiting ${fn.name} => threw ${thrownError}`);
      throw thrownError;
    }
  };
}

// A basic pipeline function in JavaScript
function pipeline(...fns) {
  return (...args) => {
    let result = fns[0](...args);
    for (let i = 1; i < fns.length; i++) {
      result = fns[i](result);
    }
    return result;
  };
}

function pipeline2(...fns) {
 return fns.reduce(
 (result, f) =>
 (...args) =>
 f(result(...args))
 );
}

// Count ODT files in a directory (simulation)
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

//Create a pipeline that lists files, filters .odt files, and counts them.
const countOdtFiles = pipeline(getDir, filterOdt, count);
console.log(countOdtFiles("/home/fkereki/Documents"))

pipeline2(
 addLogging(getDir),
 addLogging(filterOdt),
 addLogging(count)
)("/home/fkereki/Documents");
/*
entering getDir(/home/fkereki/Documents)
exiting getDir=> ...list of files...
entering filterOdt(...list of files, again...)
exiting => ...list of .odt files...
entering count(...list of .odt files ...)
exiting count=>4
*/