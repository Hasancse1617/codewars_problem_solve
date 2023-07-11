function sortArray(array) {
    let oddArr,k=0;
    oddArr = array.filter((val)=>val%2==1||val%2==-1).sort((x,y)=>x-y);
    for(let i=0; i<array.length; i++){
      if(array[i]%2==1||array[i]%2==-1){
        array[i]=oddArr[k];
        k++;
      }
    }
    return array;
}
console.log(sortArray([-21, -29]));