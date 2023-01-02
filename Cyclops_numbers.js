function cyclops(n) {
    let b = n.toString(2).split("");
    let arr = b.filter((x)=>x!=0);
    return (b.length%2==1 && b[(b.length+1)/2-1]=='0' && b.length==arr.length+1)?true:false;
  }
  console.log(cyclops(27));