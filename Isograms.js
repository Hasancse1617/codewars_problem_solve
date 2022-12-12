function isIsogram(str){
    str = str.toLowerCase();
   let obj = {};
   for(let i=0; i<str.length; i++){
     if(obj[str[i]]){
       return false;
       break;
     }else{
       obj[str[i]] = 1;
     }
   }
 //   console.log(str);
   return true;
 }
 isIsogram("Dermatoglyphicss");