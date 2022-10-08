function findOdd(arr) {
    let map1 = new Map(), ans=0;
    for (let i = 0; i < arr.length; i++) {
        if(map1.get(arr[i])){
            map1.set(arr[i], map1.get(arr[i])+1);
        }else{
            map1.set(arr[i], 1);
        }
    }
    map1.forEach((value, key)=>{
        if(value % 2 == 1){
            ans = key;
        }
    });
    return ans;
}
findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]);