function uniqueInOrder(iterable){
    let arr = [];
    if(Array.isArray(iterable)){
        for(i of iterable){
            if(arr[arr.length - 1] == i){
              continue;
            }else{
              arr.push(i);
            }
        }
    }else{
        for(i of iterable.split('')){
            if(arr[arr.length - 1] == i){
              continue;
            }else{
              arr.push(i);
            }
        }
    }
    
    return arr;
}
console.log(uniqueInOrder([1,2,2,3,3]));