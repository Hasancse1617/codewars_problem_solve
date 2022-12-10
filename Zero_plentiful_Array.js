function zeroPlentiful(arr){
    let k=0,count=0;
    for(let i=0; i<arr.length; i++){
      if(arr[i]==0){
        k++;
      }else{
        if(k>=4){
          count++;
          k=0;
        }
        if(k<4 && k>0){
          count=0;
          break;
        }
        k=0;
      }
    }
    if(k>=4){
      count++;
    }
    if(k<4 && k>0){
      count=0;
    }
    console.log(count)
    return count;
  }
  zeroPlentiful([0,0,0,0,1,0]);