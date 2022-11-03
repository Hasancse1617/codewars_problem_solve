function toCamelCase(str){
    let ans="";
    for(let i=0; i<str.length; i++){
      if(str[i]=="_" || str[i]=="-"){
        i++;
        ans += str[i].toUpperCase();
      }else{
        ans += str[i];
      }
    }
   return ans;
 }
 toCamelCase("");