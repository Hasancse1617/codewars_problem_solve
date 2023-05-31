function findMissingLetter(array){
    let ans,compare=array[0].charCodeAt(0);
    for(let i=1; i<array.length; i++){
      if(compare+1 == array[i].charCodeAt(0)){
        compare = array[i].charCodeAt(0);
      }else{
        ans = array[i].charCodeAt(0);
        break;
      }
    }
   return String.fromCharCode(ans-1);
}
console.log(findMissingLetter(['a','b','c','d','f']));