function genfib(){
    let a =0,b=0,i=0;
    return function fib(){
      if(i==0){i++; return 0;}
      if(i==1){i++; a=0; b=1; return 1;}
      let t=b;
      b= a+b;
      a=t;
      return b;
    }
  }
  var fib = genfib();
  console.log(fib());
  console.log(fib());
  console.log(fib());
  console.log(fib());
  console.log(fib());
  console.log(fib());