function strong(n) {
    function fact(m){
      if(m<=0){
        return 1;
      }
      return m * fact(m-1);
    }
    let str, sum=0;
    str = n.toString();
    for(let i=0; i< str.length; i++){
      sum = sum + fact(Number(str[i]));
    }
    return (sum==n)?"STRONG!!!!":"Not Strong !!";
  }
  strong(145);