function bouncingBall(h,  bounce,  window) {
    let n=0;
   if(h<=0 || bounce <= 0 || bounce >= 1 || window >= h){return -1;}
   while( h > window){
     h = h * bounce;
     n++;
   }
   return (n-1)*2+1;
}
bouncingBall(3.0, 0.66, 1.5);