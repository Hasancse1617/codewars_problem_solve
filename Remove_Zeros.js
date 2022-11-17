function removeZeros(array) {
    let head=[],tail=[],j=0,k=0;
    for(let i of array){
      if(i===0 || i==="0"){
        console.log(i)
        tail[j]=i;
        j++;
      }else{
        head[k]=i;
        k++;
      }
    }
    console.log([...head,...tail])
    return [...head,...tail];
  }
  removeZeros([1,null,"5","2",8,6,null,"0",0,false]);