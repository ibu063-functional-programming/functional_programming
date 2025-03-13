const getRandomFileName = (fileExtension = "") => {
    const NAME_LENGTH = 12;
    const namePart = new Array(NAME_LENGTH);
    for (let i = 0; i < NAME_LENGTH; i++) {
        namePart[i] = getRandomLetter();
    }
    return namePart.join("") + fileExtension;
};

console.log(getRandomFileName(".pdf")); // Example output: "XJDFLKHGTYUP.pdf"
getRandomFileName(".pdf"); // "SVHSSKHXPQKG.pdf" 
getRandomFileName(".pdf"); // "DCHKTMNWFHYZ.pdf" 
getRandomFileName(".pdf"); // "GBTEFTVVHADO.pdf" 
getRandomFileName(".pdf"); // "ATCBVUOSXLXW.pdf" 
getRandomFileName(".pdf"); // "OIFADZKKNVAH.pdf"