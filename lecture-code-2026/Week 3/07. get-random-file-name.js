import getRandomLetter from "./06. get-random-letter.js";
const getRandomFileName = (fileExtension = "") => {
    const NAME_LENGTH = 12;
    const namePart = new Array(NAME_LENGTH);
    //console.log(namePart); // [ <12 empty items> ]
    for (let i = 0; i < NAME_LENGTH; i++) {
        namePart[i] = getRandomLetter();
    }
    return namePart.join("") + fileExtension;
};
//['a', 'b', 'c'].join(""); // "abc"
//getRandomFileName()
console.log(getRandomFileName(".pdf")); // Example output: "XJDFLKHGTYUP.pdf"
console.log(getRandomFileName(".pdf")); // Example output: "SVHSSKHXPQKG.pdf" 
console.log(getRandomFileName(".pdf")); // Example output: "DCHKTMNWFHYZ.pdf" 
console.log(getRandomFileName(".pdf")); // Example output: "GBTEFTVVHADO.pdf" 
console.log(getRandomFileName(".pdf")); // Example output: "ATCBVUOSXLXW.pdf" 
console.log(getRandomFileName(".pdf")); // Example output: "OIFADZKKNVAH.pdf"