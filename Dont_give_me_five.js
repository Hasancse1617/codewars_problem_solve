function dontGiveMeFive(start, end){
    let ans=0;
    for(let i=start; i<=end; i++){
      if(!i.toString().includes(5)){
        ans++;
      }
    }
    return ans;
}
console.log(dontGiveMeFive(1,9));
  
  