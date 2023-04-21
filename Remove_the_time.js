function shortenToDate(longDate) {
    let d = longDate.split(",");
    return d[0];
}
console.log(shortenToDate("Friday May 2, 9am"))