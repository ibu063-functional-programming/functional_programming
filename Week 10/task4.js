const { students, legacyDB } = require('./students');

// BAD: tightly coupled – impossible to test without real legacyDB
const getAtRiskStudents_coupled = () =>
legacyDB.fetchAll().filter(s => s.gpa < 2.5 && s.status === 'active');

// Refactor it into a createStudentService(dataSource) factory 
// that accepts a data source object and returns a service 
// with these methods:
// getAtRiskStudents() - active students with GPA < 2.5
// getHonourStudents() - active students with GPA ≥ 3.5
// getStudentReport(id) - returns a formatted string summary for one student

// TO DO

const createStudentService = (dataSource) => {
  return {
    getAtRiskStudents: () =>
      dataSource.fetchAll().filter(
        student => student.gpa < 2.5 && student.status === 'active'
      ),

    getHonourStudents: () =>
      dataSource.fetchAll().filter(
        student => student.gpa >= 3.5 && student.status === 'active'
      ),

    getStudentReport: (id) => {
      const student = dataSource.fetchById(id);

      if (!student) {
        return `Student with id ${id} was not found.`;
      }

      return `${student.name} (${student.id}) - GPA: ${student.gpa}, Year: ${student.year}, Department: ${student.dept}, Status: ${student.status}`;
    }
  };
};


// Example usage:
const sisService = createStudentService(legacyDB);
console.log(sisService.getAtRiskStudents().map(s => s.name));
console.log(sisService.getHonourStudents().map(s => s.name));
console.log(sisService.getStudentReport('S005'));

//  Test usage (mock injected, no real DB)
const mockDB = {
fetchAll: () => [{ id:'T01', name:'Test', gpa:1.9, year:2,
dept:'CS', status:'active' }],
fetchById: () => null,
fetchByDept: () => [],
};
const testService = createStudentService(mockDB);
console.log(testService.getAtRiskStudents().map(s=>s.name)); 

