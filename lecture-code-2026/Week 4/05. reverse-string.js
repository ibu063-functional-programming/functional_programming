const reverseString = (str) => {
    const arr = str.split("");
    arr.reverse();
    return arr.join("");
};

console.log(reverseString("MONTEVIDEO")); // OEDIVETNOM