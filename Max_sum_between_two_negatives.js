function maxSumBetweenTwoNegatives(a) {
    let sum=[],negative=0, s=0;
    for(let i=0; i<a.length; i++){
      if(a[i]<0){
        negative = negative+1;
        if(negative==1){continue;}
      }
      if(negative==2){
        sum.push(s);
        s=0;
        negative=1;
       }else if(negative==1){
          s=s+a[i];
       }
    }
    return sum.length >0?Math.max(...sum):-1;
  }
  console.log(maxSumBetweenTwoNegatives([-1,-2]));