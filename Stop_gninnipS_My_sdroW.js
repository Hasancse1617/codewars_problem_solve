function spinWords(string){
    let ans = string.split(" ").map((val)=>{
      if(val.length>=5){
        return val.split("").reverse().join("");
      }
      return val;
    }).join(" ");
    return ans;
}
console.log(spinWords("Hey fellow warriors"));