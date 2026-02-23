// ************ TASK DESCRIPTION ************

// Write a PURE function "removeVowels" that takes a string as a parameter and returns a string where the vowels are removed.



// TODO
const removeVowels = (str) => {
    let result = ""; 
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; // Define vowels

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let isVowel = false;

        for (let j = 0; j < vowels.length; j++) {
            if (char === vowels[j]) {
                isVowel = true;
                break;
            }
        }

        if (!isVowel) {
            result += char;
        }
    }
    
    return result; 
};















// Below this comment any modification is prohibited. 
module.exports = removeVowels;