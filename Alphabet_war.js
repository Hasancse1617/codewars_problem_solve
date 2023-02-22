function alphabetWar(fight)
{
  let obj1={"w":4,"p":3,"b":2,"s":1},obj2={"m":4,"q":3,"d":2,"z":1}; 
  let left=0,right=0,i,arr=fight.split("");
  for(i=0; i<arr.length; i++){
    if(obj1[arr[i]]){
      left = left + obj1[arr[i]]; 
    }
    if(obj2[arr[i]]){
      right = right + obj2[arr[i]];
    }
  }
  if(left>right){
    return "Left side wins!";
  }else if(right > left){
    return "Right side wins!";
  }else{
    return "Let's fight again!";
  }
}
console.log(alphabetWar("z"));