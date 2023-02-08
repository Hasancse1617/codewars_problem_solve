function nearestSq(n){
    let num = Math.sqrt(n),left,right;
    if(Number.isInteger(num)){
      return n;
    }else{
      let a = Number.parseInt(num);
      left = (a)*(a);
      right = (a+1)*(a+1);
      if(n-left > right-n){
        return right;
      }else{
        return left;
      }
    }
  }
  console.log(nearestSq(9999));