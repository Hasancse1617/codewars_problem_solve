function fakeBin(x){
    return x.split("").map((val)=>{
      if(val<5){
        return 0;
      }else{
        return 1;
      }
    }).join("").toString();
 }