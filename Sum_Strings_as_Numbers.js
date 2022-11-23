function sumStrings(a,b) { 
    let x,y,acc=0,sum=0,ans=[];
    if(a.length >= b.length){
      x=a;
      y=b;
    }else{
      x=b;
      y=a;
    }
    x = x.split("").reverse();
    y = y.split("").reverse();
    for(let i=0; i<x.length; i++){
      if(y[i]){
        if(i==x.length-1){
          sum = Number(x[i])+Number(y[i])+acc;
          ans.unshift(sum);
          continue;
        }
        sum = Number(x[i])+Number(y[i])+acc;
        ans.unshift(sum%10);
        acc = parseInt(sum/10);
      }else{
        if(i==x.length-1){
          sum = Number(x[i])+acc;
          ans.unshift(sum);
          continue;
        }
        sum = Number(x[i])+acc;
        ans.unshift(sum%10);
        acc = parseInt(sum/10);
      }
    }
  
     while (ans.indexOf(0) === 0) {
       ans.shift()
     }
     console.log(ans.join(""));
    return ans.join("");
  }
  sumStrings('712569312664357328695151392', '8100824045303269669937');