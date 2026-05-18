const { findStudentById} = require('./students');
const { Maybe } = require('./task4');
const { MaybeM } = require('./task6');

// pipeline :: (...Functions) → a → b
const pipeline = (...fns) => (x) =>
  fns.reduce((value, fn) => fn(value), x);

// compose :: (...Functions) → a → b
const compose = (...fns) => (x) =>
  fns.reduceRight((value, fn) => fn(value), x);

// formatReportLine :: String → Student → String
const formatReportLine = (template) => (student) =>
  template
    .replace('{name}', student.name)
    .replace('{gpa}', student.gpa.toFixed(2))
    .replace('{dept}', student.dept)
    .replace('{year}', student.year)
    .replace('{status}', student.status);

// maybeOrDefault :: a → Maybe a → a
const maybeOrDefault = (defaultValue) => (maybe) =>
  maybe.isNothing() ? defaultValue : maybe.valueOf();

const template = '{name} | GPA: {gpa} | Department: {dept} | Year: {year} | Status: {status}';

const formatStudent = compose(
  formatReportLine(template)
);

const generateReport = (ids) =>
  ids.map(id =>
    pipeline(
      findStudentById,
      MaybeM.of,
      maybe => maybe.map(formatStudent),
      maybeOrDefault('Student not found')
    )(id)
  );
 
// --- Verification ---
const report = generateReport(['S001', 'S003', 'S999', 'S005', 'S004']);
report.forEach(line => console.log('REPORT LINE:', line));

module.exports = {
  pipeline,
  compose,
  formatReportLine,
  maybeOrDefault,
  generateReport
};