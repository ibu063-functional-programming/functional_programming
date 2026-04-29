//TO DO
const setIn = (path, value, obj) => {
  const key = path[0];
  const newObj = Number.isInteger(+key) ? [] : {};

  Object.keys(obj || {}).forEach((k) => {
    newObj[k] = k !== key ? obj[k] : null;
  });

  newObj[key] =
    path.length > 1
      ? setIn(path.slice(1), value, obj && obj[key] ? obj[key] : {})
      : value;

  return newObj;
};

const deleteIn = (path, obj) => {
  const key = path[0];
  const newObj = Number.isInteger(+key) ? [] : {};

  Object.keys(obj || {}).forEach((k) => {
    if (k !== key) {
      newObj[k] = obj[k];
    }
  });

  if (path.length > 1) {
    newObj[key] = deleteIn(path.slice(1), obj[key]);
  }

  return newObj;
};

const registry = {
    department: 'CS',
    records: {
      S001: { name: 'Ana Kovacevic',  gpa: 9.2 },
      S003: { name: 'Lejla Mustafic', gpa: 8.8 },
    },
  };
  
const updated = setIn(['records', 'S001', 'gpa'], 9.8, registry);
console.log(updated.records.S001.gpa);   // 9.8
console.log(registry.records.S001.gpa);  // 9.2 <-- original unchanged
console.log(registry.records.S003 === updated.records.S003); // true

const pruned = deleteIn(['records', 'S003'], registry);
console.log(pruned.records.S003);    // undefined
console.log(registry.records.S003);  