function divisors(integer) {
    let divisor = [];
    for(i=2;i<=integer/2;i++){
      if(integer%i==0){
        divisor.push(i);
      }
    }
    if(divisor.length == 0){
      return `${integer} is prime`;
    }else{
      return divisor;
    }
};