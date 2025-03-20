// ************ TASK DESCRIPTION ************

// Write a PURE function "increaseGPA" which updates the score
// of a "student" object (1st parameter) by a passed amount (2nd parameter).

// Example of a student object:
// * student1 = {"name": "Fadil", "GPA": 9.7}



// TODO
const increaseGPA = (student, amount) => {
    return {
        name: student.name, 
        GPA: student.GPA + amount 
    };
};





















// Below this comment any modification is prohibited. 
module.exports = increaseGPA;