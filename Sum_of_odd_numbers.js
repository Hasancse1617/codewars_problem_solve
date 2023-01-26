function rowSumOddNumbers(n) {
    let start = (2*((n-1)*((n-1)+1))/2)+1, ans=start,i=1;
  
    while(i<n){
      ans = ans + start+(2*i);
      i++;
    }
    return ans;
}
console.log(rowSumOddNumbers(42));
  
  