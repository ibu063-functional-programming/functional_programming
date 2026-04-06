const getRandomLetter2 = (getRandomNum = Math.random.bind(Math)) => {
    const min = "A".charCodeAt(0);
    const max = "Z".charCodeAt(0);
    return String.fromCharCode(
        Math.floor(getRandomNum() * (1 + max - min)) + min
    );
};
//getRandomLetter2();

const getRandomFileName2 = (fileExtension = "", randomLetterFunc) => {
    const NAME_LENGTH = 12;
    const namePart = new Array(NAME_LENGTH);
    
    for (let i = 0; i < NAME_LENGTH; i++) {
        namePart[i] = randomLetterFunc();
    }

    return namePart.join("") + fileExtension;
};

console.log(getRandomFileName2(".pdf", getRandomLetter2)); // Example output: "XJDFLKHGTYUP.pdf"
console.log(getRandomFileName2(".pdf", getRandomLetter2)); // "SVHSSKHXPQKG.pdf"
console.log(getRandomFileName2(".pdf", getRandomLetter2)); // "DCHKTMNWFHYZ.pdf"


console.log(getRandomFileName2(".pdf", () => getRandomLetter2(() => 0.5))); // NNNNNNNNNNNNN.pdf
console.log(getRandomFileName2(".pdf", () => getRandomLetter2(() => 0.5))); // NNNNNNNNNNNNN.pdf

const fixedLetter = () => getRandomLetter2(() => 0.4);
console.log(getRandomFileName2(".pdf", fixedLetter));  // KKKKKKKKKKKKK.pdf
console.log(getRandomFileName2(".pdf", fixedLetter));  // KKKKKKKKKKKKK.pdf
console.log(getRandomFileName2(".pdf", fixedLetter));  // KKKKKKKKKKKKK.pdf
console.log(getRandomFileName2(".pdf", fixedLetter));  // KKKKKKKKKKKKK.pdf
console.log(getRandomFileName2(".pdf", fixedLetter));  // KKKKKKKKKKKKK.pdf