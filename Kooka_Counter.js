var kookaCounter = function(laughing) {
    let ans=1, portion;
    if(laughing=="")
    {  
      return 0
    }else{
      let arr = laughing.split("");
      portion = laughing.slice(0,2)
      for(let i=2; i< arr.length; i+=2){
        if(portion != laughing.slice(i,i+2)){
          ans++;
          portion = laughing.slice(i,i+2);
        }
      }
    }
    return ans;
  }
  console.log(kookaCounter(""));