function arraysSimilar(arr1, arr2) {
    let obj1=new Map(),obj2=new Map(),ans=0;
    if(arr1.length == arr2.length){
      for(let i=0; i<arr1.length; i++){
        if(obj1.has(arr1[i])){
           let a = obj1.get(arr1[i])+1;
           obj1.set(arr1[i],a);
        }else{
          obj1.set(arr1[i],1);
        }
        if(obj2.has(arr2[i])){
          let b = obj2.get(arr2[i])+1;
          obj2.set(arr2[i],b);
        }else{
          obj2.set(arr2[i],1);
        }
      }
      obj1.forEach (function(value, key) {
        if(obj1.get(key) != obj2.get(key)){
            ans=1;
        }
      })
    }else{
      return false;
    }
   return ans==1?false:true;
  }
   const arr1 = [11,12,34,57,7,17,99],
          arr2 = [11,17,99,12,57,34,7],
          arr3 = [1, 2, 3, 4],
          arr4 = [1, 2, 3, "4"]
  console.log(arraysSimilar(arr2, arr1));