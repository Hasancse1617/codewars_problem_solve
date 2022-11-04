function persistence(num) {
   let ans = 0;
   let digits;
   let realDigits=num;
   while(realDigits >=10){
     digits = num.toString().split('');
     realDigits = digits.reduce((acc,x)=>acc*x);
     num = Number(realDigits);
     ans++;
   }
  console.log(ans);
  return ans;
}
persistence(25);