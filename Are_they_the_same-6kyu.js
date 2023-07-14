function comp(array1, array2){
    let obj={};
    if(array1==null || array2==null){
       return false;
    }
    for(let i=0; i<array2.length; i++){
       if(!obj[array2[i]]){
         obj[array2[i]]=1;
       }else{
         obj[array2[i]]++;
       }
    }
    for(let i=0; i<array1.length; i++){
       if(obj[array1[i]*array1[i]] && obj[array1[i]*array1[i]]>0){
          obj[array1[i]*array1[i]]--;
       }else{
          return false;
       }
    }
    return true;
  }
  console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [231, 14641, 20736, 361, 25921, 361, 20736, 361]));