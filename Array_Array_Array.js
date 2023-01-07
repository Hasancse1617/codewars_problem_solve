function explode(x){
    let num = 0;
    if(!Number.isInteger(x[0]) && !Number.isInteger(x[1])){
      return "Void!";
    }
    if(Number.isInteger(x[0])){
      num = num + x[0];
    }
    if(Number.isInteger(x[1])){
      num = num + x[1];
    }
    let arr=[];
    for(let i=0; i<num; i++){
      arr.push(x);
    }
    return arr;
  }
  explode(["a",3]);