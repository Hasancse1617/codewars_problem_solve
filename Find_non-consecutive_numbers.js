function allNonConsecutive (arr) {
    let ans=[],i=0,n=arr.length;
    while(i<n-1){
      if(arr[i]+1 == arr[i+1]){
        
      }else{
        ans.push({"i": i+1,"n":arr[i+1]});
      }
      i=i+1;
    }
    return ans;
}
allNonConsecutive([1,3]);