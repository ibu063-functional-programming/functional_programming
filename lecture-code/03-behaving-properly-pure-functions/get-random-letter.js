const getRandomLetter = () => {
    const min = "A".charCodeAt(0);
    const max = "Z".charCodeAt(0);
    return String.fromCharCode(
        Math.floor(Math.random() * (1 + max - min)) + min
    );
};

console.log(getRandomLetter()); // Example output: "G"