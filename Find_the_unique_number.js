function findUniq(arr) {
    let obj={};
    for(let i=0; i<arr.length; i++){
      if(obj[arr[i]]){
        obj[arr[i]]++;
      }else{
        obj[arr[i]]=1;
      }
    }
    for(let i in obj){
      if(obj[i]==1){
        return Number(i);
      }
    }
  }
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));