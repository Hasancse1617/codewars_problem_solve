function alternateSqSum(arr){
    let a =0;
    a= arr.reduce((acc,val,index)=>{
      if(index%2==1){
        return acc+(val*val);
      }else{
        return acc+val;
      }
    },0)
    return a;
}
console.log(alternateSqSum([1,2,3,4,5]));