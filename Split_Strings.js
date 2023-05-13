function solution(str){
    let ans=[];
    for(let i=0; i<str.length; i+=2){
      if(str.length%2!=0 && i==str.length-1){
        ans.push(str[i]+"_");
      }else{
        ans.push(str[i]+str[i+1]);
      }
    }
   return ans;
}
console.log(solution(""));