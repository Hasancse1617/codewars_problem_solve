function positiveSum(arr) {
    return arr.reduce((acc,val)=>{
      if(val>0){
        return acc+val;
      }
      return acc;
    },0)
}