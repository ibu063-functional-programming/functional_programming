/*
You’re given an array of student scores. 
Write a program that will loop through it and print “Pass” if the score is >= 55, “Fail” otherwise.
students = [54, 55, 67, 29, 41, 89, 99, 95, 39, 44, 61, 74]
*/

let students = [54, 55, 67, 29, 41, 89, 99, 95, 39, 44, 61, 74];
for (let i = 0; i < students.length; i++) {
    if (students[i] >= 55) {
        students[i] = "Pass";
    } else {
        students[i] = "Fail";
    }
}
console.log(students);