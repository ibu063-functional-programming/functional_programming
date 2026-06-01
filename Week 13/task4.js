const { students, findStudentById, findCourseByCode } = require('./data');

function getStudentDepartmentHardcoded(id) {
  const student = findStudentById(id);
  if (!student) return 'Student not found';
  return student.dept;
}
 
function getCourseAvailabilityHardcoded(code) {
  const course = findCourseByCode(code); 
  if (!course) return 'Course not found';
  return course.enrolled < course.maxSeats ? 'Available' : 'Full';
}

const getStudentDepartment = (id, finderFn) => {
  const student = finderFn(id);
  return student ? student.dept : 'Student not found';
};

const getCourseAvailability = (code, finderFn) => {
  const course = finderFn(code);

  if (!course) return 'Course not found';

  return course.enrolled < course.maxSeats ? 'Available' : 'Full';
};


// Fake finder functions for testing

const fakeStudentFinder = (id) =>
  ({ id, name: 'Test Student', dept: 'CS' });

const fakeMissingStudentFinder = () => null;

const fakeAvailableCourseFinder = (code) =>
  ({ code, enrolled: 10, maxSeats: 20 });

const fakeFullCourseFinder = (code) =>
  ({ code, enrolled: 25, maxSeats: 25 });

const fakeMissingCourseFinder = () => null;


// Tests for Task 4

console.assert(
  getStudentDepartment('S001', fakeStudentFinder) === 'CS',
  'Should return department CS'
);

console.assert(
  getStudentDepartment('S999', fakeMissingStudentFinder) === 'Student not found',
  'Should return Student not found'
);

console.assert(
  getCourseAvailability('CS101', fakeAvailableCourseFinder) === 'Available',
  'Course should be available'
);

console.assert(
  getCourseAvailability('CS201', fakeFullCourseFinder) === 'Full',
  'Course should be full'
);

console.assert(
  getCourseAvailability('XXX', fakeMissingCourseFinder) === 'Course not found',
  'Should return Course not found'
);
