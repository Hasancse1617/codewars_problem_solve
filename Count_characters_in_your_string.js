function count(string) {
    let ans={},arr=string.split("");
    for(let i=0; i<arr.length; i++){
      if(ans[arr[i]]){
        ans[arr[i]]++;
      }else{
        ans[arr[i]]=1;
      }
    }
    return ans;
}
console.log(count('aba'));