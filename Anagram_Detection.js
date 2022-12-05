var isAnagram = function(test, original) {
    if(test.length !== original.length){return false;}
    original=original.toLowerCase();
    test = test.toLowerCase();
    let obj1={},obj2={};
    for(let i=0; i<original.length; i++){
      if(!obj1[original[i]]){
        obj1[original[i]] = 1;
      }else{
        obj1[original[i]]++;
      }
    }
    for(let i=0; i<test.length; i++){
      if(!obj2[test[i]]){
        obj2[test[i]] = 1;
      }else{
        obj2[test[i]]++;
      }
    }
    for(let i in obj1){
      if(obj1[i]!=obj2[i]){
        return false;
      }
    }
    return true;
  };
  isAnagram("foefet", "toffee");