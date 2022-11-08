function duplicateCount(text){
    let obj={};
    let lower = text.toLowerCase();
    
    for(let i of lower){
      obj[i]? obj[i]++ : obj[i]=1;
    }
    let a = Object.keys(obj).filter((k)=>obj[k]>1);
   
    return a.length;
  }
duplicateCount("");