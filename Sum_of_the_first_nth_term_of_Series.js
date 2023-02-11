function SeriesSum(n){
    let ans=n==0?0:1;
    for(let i=2,j=4; i<=n; i++,j=j+3){
      ans+=(1/j);
    }
    return ans.toFixed(2);
}
console.log(SeriesSum(0));  