const { students } = require('./students');
const { sisDataModule } = require('./task1');
const { withLogging } = require('./task2');
const { sortStudents, byGPADesc } = require('./task3');


const pipeline = (...fns) => x =>
  fns.reduce((value, fn) => fn(value), x);

const compose = (...fns) => x =>
  fns.reduceRight((value, fn) => fn(value), x);

const roundGPA = s => ({
  ...s,
  gpa: Number(s.gpa.toFixed(1))
});

const formatLine = rank => s =>
  `${rank}. ${s.name} - GPA: ${s.gpa}`;

const filterEligible = arr =>
  arr.filter(s => s.status === 'active' && s.year >= 2);

const sortByGPA = arr =>
  sortStudents(arr, byGPADesc);

const formatWithRank = arr =>
  arr.map((student, index) => {
    const formatter = compose(
      formatLine(index + 1),
      roundGPA
    );
    return formatter(student);
  });

const generateReport = pipeline(
  filterEligible,
  sortByGPA,
  formatWithRank
);

const loggedGenerateReport = withLogging(generateReport);

const activeStudents = sisDataModule.getActiveStudents();

const reportLines = loggedGenerateReport(activeStudents);

reportLines.forEach(line => {
  console.log(`REPORT LINE: ${line}`);
});