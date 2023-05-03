function solution(number){
    if(number<=0){return 0;}
    let ans=[];
    for(let i=1; i<number; i++){
      if(i%5==0||i%3==0){
        ans.push(i);
      }
    }
    return ans.reduce((acc,val)=>acc+val,0);
}
console.log(solution(10));