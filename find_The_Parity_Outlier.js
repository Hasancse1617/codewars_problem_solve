function findOutlier(arr){
    let m=0,n=0,odd,even;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2==0){
            m++;
            even=i;
        }else{
            n++;
            odd=i;
        }
    }
    if(m>n){
        return arr[odd];
    }else{
        return arr[even];
    }
}
findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);