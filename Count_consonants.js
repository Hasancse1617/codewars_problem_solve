function consonantCount(str) {
    let count = 0;
    str = str.replace(/[^a-zA-Z]+/g, '').toLowerCase();
    for(let i=0; i<str.length; i++){
      if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
         
      }else{
        count++;
      }
    }
    return count;
  }
  consonantCount('h^$&^#$&^elLo world');