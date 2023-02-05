function nbYear(p0, percent, aug, p) {
    var a = Math.floor(p0 + (p0 * (percent/100)) + aug), ans=1;
    while(a<p){
      ans+=1;
      p0=a;
      a = Math.floor(p0 + (p0 * (percent/100)) + aug)
    }
  return ans;
}