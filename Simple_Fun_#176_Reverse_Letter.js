function reverseLetter(str) {
    return str.replace(/[^a-zA-Z]/g,"").split("").reverse().join("");
}
console.log(reverseLetter("ultr53o?n"));