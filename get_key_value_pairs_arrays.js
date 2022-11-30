function keysAndValues(data){
    let arr1=[],arr2=[];
    for(let i in data){
      arr1.push(i);
      arr2.push(data[i]);
    }
    return [arr1,arr2];
}
keysAndValues({a: 1, b: 2, c: 3});