function sumFactorial(arr){
    let sum = 0;
    function fact(n){
      if(n==0) return 1;
      return n*fact(n-1)
    }
    for(let i=0; i<arr.length; i++){
      sum = sum + fact(arr[i]);
    }
    return sum;
  }
console.log(sumFactorial([5,4,1]))
  