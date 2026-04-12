function pipeline(...fns) {
  return (...args) => {
    let result = fns[0](...args);
    for (let i = 1; i < fns.length; i++) {
      result = fns[i](result);
    }
    return result;
  };
}

function getDir() {
  return ['project.odt', 'data.csv', 'report.odt'];
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

const pipelineDebug = pipeline(
  getDir,
  tap(files => console.log('Files:', files)),
  filterOdt,
  tap(filtered => console.log('Filtered ODTs:', filtered)),
  count
);

console.log('Total:', pipelineDebug());