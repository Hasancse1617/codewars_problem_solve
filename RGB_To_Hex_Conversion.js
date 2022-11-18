function rgb(r, g, b){
    let ans = "";
    let convert = function(x){
       if(x<=0){
       ans +="00";
     }else if(x>=255){
       ans +="FF";
     }else{
       let f=0,s=0,ss=0,l=0;
       s = x % 16;
       ss = parseInt(x/16);
       f = ss % 16;
       ans += f.toString(16).toUpperCase();    
       ans += s.toString(16).toUpperCase();
     }
    }
    convert(r);
    convert(g);
    convert(b);
    console.log(ans);
    return ans;
  }
  rgb(173,255,47);