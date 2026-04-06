const reverseString2 = (str) =>
    //arr = str.split("").reduce((x, y) => y + x, "")
    //let arr = str.split("");
    str.split("").reduceRight((x, y) => x + y, "");
console.log(reverseString2("OEDIVETNOM")); // MONTEVIDEO

/*
let newString = ""
let original = "OEDIVETNOM"
for (let i = original.length - 1; i >= 0; i--) {
    newString += original[i]
}
result = "" + "M" 
"M" + "O" 
MO + N
console.log(newString); // MONTEVIDEO

let newString2 = ""
let original2 = "OEDIVETNOM"
for (let i = 0; i < original2.length; i++) {
    //newString2 += original2[i] not good 
    newstring2 = original2[i] + newString2
}
O
E+O

"M"+""
"O"+"M"
"N"+"MO"
console.log(newString2); // MONTEVIDEO
*/