const getRandomLetter = () => {
    const min = "A".charCodeAt(0);
    const max = "Z".charCodeAt(0);
    //console.log('min', min); // 65
    //console.log('max', max); // 90
    random = Math.random() * (1 + max - min)
    floorRandom = Math.floor(random)+ min   
    return String.fromCharCode(floorRandom);
    /*return String.fromCharCode(
        Math.floor(Math.random() * (1 + max - min)) + min
    );*/
    
};

console.log(getRandomLetter()); // Example output: "G"
console.log(getRandomLetter()); // Example output: "G"

console.log(getRandomLetter()); // Example output: "G"

console.log(getRandomLetter()); // Example output: "G"


module.exports = getRandomLetter;