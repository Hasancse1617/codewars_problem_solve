function getMiddle(s){
    let l = s.length; 
    return l%2==0?s.slice((l/2)-1,(l/2)+1):s.slice(((l-1)/2),((l-1)/2)+1);
}
console.log(getMiddle("testt"));