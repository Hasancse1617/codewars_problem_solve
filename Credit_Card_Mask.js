function maskify(cc) {
    return cc.split("").map((val,index)=>{
      if(index >= (cc.length-4)){
        return val;
      }
      return "*";
    }).join("");
}
console.log(maskify('1'));
 
 