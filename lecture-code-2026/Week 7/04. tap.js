function pipeline(...fns) {
  return (...args) => {
    let result = fns[0](...args);
    for (let i = 1; i < fns.length; i++) {
      result = fns[i](result);
    }
    return result;
  };
}

function getDir(path) {
  return ['doc1.odt', 'doc2.pdf', 'doc3.odt', 'doc4.odt'];
}

function filterOdt(files) {
  return files.filter(file => file.endsWith('.odt'));
}

function count(arr) {
  return arr.length;
}

function tap(fn) {
  return x => {
    fn(x);
    return x;
  };
}

// Example: Logging
const debugLog = tap(console.log);

const pipelineWithLogging = pipeline(
  getDir,
  debugLog,
  filterOdt,
  debugLog,
  count
);

pipelineWithLogging('/some/path');
const result = pipelineWithLogging('/some/path');
console.log('Final result:', result);