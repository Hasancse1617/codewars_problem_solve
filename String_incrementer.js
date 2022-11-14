function incrementString (strng) {
    let str="", arr=[], rem=0, block=false;
     if(Number(strng[strng.length-1])<9){
        str = strng.slice(0,strng.length-1);
        str += Number(strng[strng.length-1])+1;
        return str;
     }else if(!Number(strng[strng.length-1])){
       strng += 1;
       return strng;
     }
     else{
       for(let i=strng.length-1; i>=0; i--){
         if(Number(strng[i]) >= 0 && block==false){
           if(i==strng.length-1){
             arr.unshift((Number(strng[i])+rem+1)%10);
             rem = parseInt((Number(strng[i])+rem+1)/10);
           }else{
             arr.unshift((Number(strng[i])+rem)%10);
             rem = parseInt((Number(strng[i])+rem+1)/10);
           }
  //          console.log(Number(strng[i]))
         }else{
           block=true;
           if(rem){
             arr.unshift(rem);
             arr.unshift(strng[i])
             rem=0;
           }else{
             arr.unshift(strng[i]);
           }
         }
         
       }
     }
    return arr.join("");
  }
  incrementString("foo");