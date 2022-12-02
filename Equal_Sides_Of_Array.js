function findEvenIndex(arr)
{
  let leftSum=0, rightSum=0, index=-1; 
  for(let i=0; i<arr.length; i++){
     leftArr = arr.slice(0,i);
     rightArr = arr.slice(i+1);
     leftSum = leftArr.reduce((acc,a)=>acc+a,0);
     rightSum = rightArr.reduce((acc,a)=>acc+a,0);
     if(leftSum==rightSum){
       index = i;
       break;
     } 
  }
  return index;
}
findEvenIndex([20,10,30,10,10,15,35]);