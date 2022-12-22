multiplicationTable = function(size) {
    let arr=[],a=[],i,j;
    for(i=1; i<=size; i++){
      for(j=1; j<=size; j++){
        a.push(i*j);
      }
      arr.push(a);
      a=[];
    }
    console.log(arr);
    return arr;
  }
  multiplicationTable(3);