const {deepFreeze} = require("./task3.js");
const {deepCopy} = require("./task4.js")

// TO DO
const getByPath = (path, obj) => {
  if (!obj || !(path[0] in obj)) {
    return undefined;
  }

  return path.length > 1
    ? getByPath(path.slice(1), obj[path[0]])
    : deepCopy(obj[path[0]]);
};

const setByPath = (path, value, obj) => {
  if (!(path[0] in obj)) {
    obj[path[0]] =
      path.length === 1
        ? null
        : Number.isInteger(+path[1])
        ? []
        : {};
  }

  if (path.length > 1) {
    return setByPath(path.slice(1), value, obj[path[0]]);
  } else {
    obj[path[0]] = value;
    return obj;
  }
};

const updateObject = (path, obj, value) => {
  const newObj = deepCopy(obj);
  setByPath(path, value, newObj);
  return deepFreeze(newObj);
};

const frozenStudent = deepFreeze({
    id: 'S007',
    name: 'Sara Ibrahimovic',
    academic: { year: 3, gpa: 8.4, advisor: 'Prof. Mehanovic' },
  });
  
  // Getter
  console.log(getByPath(['academic', 'gpa'], frozenStudent));     // 8.4
  console.log(getByPath(['academic', 'missing'], frozenStudent)); // undefined
  
  // Setter
  const updated = updateObject(['academic', 'gpa'], frozenStudent, 9.1);
  console.log(updated.academic.gpa);       // 9.1
  console.log(frozenStudent.academic.gpa); // 8.4 <-- original unchanged