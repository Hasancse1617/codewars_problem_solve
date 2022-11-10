function moveZeros(arr) {
    const arr1=[],arr2=[];
    for(let i=0; i<arr.length; i++){
      if(arr[i]!==0){
        arr1.push(arr[i])
      }else{
        arr2.push(arr[i])
      }
    }
   return [...arr1,...arr2];
 }
 moveZeros([false,1,0,1,2,0,1,3,"a"]);