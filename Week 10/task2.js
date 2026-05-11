const { students, legacyDB } = require('./students');

const getStudent = id => legacyDB.fetchById(id);
const updateGPA = (id, newGPA) => {

// Imagine this writes to a database
console.log(`GPA for ${id} updated to ${newGPA}`);
return { id, newGPA };
};

// Implement the following two decorator factories:
// withLogging(fn) — returns a wrapped version of fn that logs its 
// arguments and return value to the console, then returns the original result unchanged
// withValidation(fn, validator) — returns a wrapped version 
// of fn that calls validator(...args) first; if validation fails (returns false) it throws an Error with 
// a helpful message; otherwise it calls fn normally
// Then create decorated versions of both functions:


// TO DO: Decorated versions 
const withLogging = (fn) => {
  return (...args) => {
    console.log("[LOG] Called with args:", args);

    const result = fn(...args);

    console.log("[LOG] Returned:", result);
    return result;
  };
};

const withValidation = (fn, validator) => {
  return (...args) => {
    if (!validator(...args)) {
      throw new Error(`Validation failed for args: ${JSON.stringify(args)}`);
    }

    return fn(...args);
  };
};

// Decorated versions
const loggedGetStudent = withLogging(getStudent);
const validatedUpdateGPA = withValidation(
withLogging(updateGPA), (id, gpa) => typeof gpa === 'number' && gpa >= 0.0 && gpa <= 4.0
);

// Test
loggedGetStudent('S001');
validatedUpdateGPA('S002', 3.2);
try { validatedUpdateGPA('S002', 5.0); }
catch(e) { console.log(e.message); }

module.exports = { withLogging, withValidation };