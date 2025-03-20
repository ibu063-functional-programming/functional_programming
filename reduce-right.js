const reverseString2 = (str) =>
    str.split("").reduceRight((x, y) => x + y, "");

console.log(reverseString2("OEDIVETNOM")); // MONTEVIDEO