function upArray(arr){
    let brr = arr.find((x)=>x<0);
    let crr = arr.find((x)=>x>9);
    if(arr.length==0 || brr || crr){
        return null;
    }
    let finalArr = [], carry = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if(carry == 0 && i == arr.length-1){
            if((arr[i]+carry+1).toString().length > 1){
                finalArr.unshift(Number((arr[i]+carry+1).toString()[1]));
                carry = Number((arr[i]+carry+1).toString()[0]);
            }else{
                finalArr.unshift(arr[i]+1);
            }  
        }else if(carry && (arr[i]+carry).toString().length > 1){
            if(i==0){
                finalArr.unshift(Number((arr[i]+carry).toString()[1]));
                finalArr.unshift(Number((arr[i]+carry).toString()[0]));
            }else{
                finalArr.unshift(Number((arr[i]+carry).toString()[1]));
                carry = Number((arr[i]+carry).toString()[0]);
            } 
        }else{
            finalArr.unshift(arr[i]+carry);
            carry = 0;
        }
    }
    console.log(finalArr);
    return finalArr;
}
upArray([1,10]);