function tribonacci(signature,n){
    let arr = [];
    if(n==0)return [];
    for(i=0; i < n; i++){
        
        if(signature[i] != null){
            arr.push(signature[i]);
        }else{
            // console.log("jjj")
            let next = arr[i-1]+arr[i-2]+arr[i-3];
            arr.push(next);
        }
    }
    return arr;
}
console.log(tribonacci([0,0,0],10));