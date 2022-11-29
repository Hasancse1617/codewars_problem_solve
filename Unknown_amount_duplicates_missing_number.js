function findDupsMiss(arr) {
    const obj={}, arr1=[];
    for (let i = 0; i < arr.length; i++) {
        if(obj[arr[i]]){
            arr1.push(arr[i]);
        }else{
            obj[arr[i]]=1;
        }
    }
    const set = new Set([...arr]);
    const arr2 = [...set].sort((a,b)=>a-b);
    let fast = arr2[0];
    for (let i = 0; i < arr2.length; i++) {
        if(arr2[i] != fast){
            break;
        }
        fast = fast+1;
    }
    // console.log(fast, arr1.sort((a,b)=>a-b));
    return [fast, arr1.sort((a,b)=>a-b)];
}
findDupsMiss([10,9,8,9,6,1,2,4,3,2,5,5,3]);