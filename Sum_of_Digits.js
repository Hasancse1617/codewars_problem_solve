function digitalRoot(n) {
  while(n>9){
    let s = n.toString().split("");
    let sum = s.reduce((acc,x)=>Number(x)+acc, 0);
    n = sum;
  }
  console.log(n);
  return n;
}
digitalRoot(456);