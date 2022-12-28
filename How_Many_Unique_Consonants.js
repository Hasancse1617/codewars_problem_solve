function countConsonants(str) {
    let a = str.replace(/[^a-zA-Z]/g,"").replace(/[aeiou]/gi, '').replace(/\s/g, "").toLowerCase();
   return String.prototype.concat(...new Set(a)).length;
 }
 console.log(countConsonants("2uWkN"));

 function countConsonants(str) {
    return new Set(str.toLowerCase().replace(/[^a-z]|[aeiou]/g,"")).size
}