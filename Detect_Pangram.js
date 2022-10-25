function isPangram(string){
    let str = string.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    for (let i = 0; i < alphabet.length; i++) {
       if(str.indexOf(alphabet[i])<0){
          return false;
       }
    }
    return true;
    // console.log(str,string);
}
isPangram('The quick brown fox jumps over the lazy dog.');