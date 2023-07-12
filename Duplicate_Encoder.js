function duplicateEncode(word){
    let obj={};
    for(let i of word.toLowerCase()){
      if(obj[i]){
        obj[i]++;
      }else{
        obj[i]=1;
      }
    }
    return word.toLowerCase().split("").map((val)=>{
        return obj[val]==1?'(':')';
    }).join("");
}
console.log(duplicateEncode("Success"));