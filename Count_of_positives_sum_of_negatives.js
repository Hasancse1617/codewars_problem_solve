function countPositivesSumNegatives(input) {
  if(input == null){return [];}
  let evenCount=0,odd=0;
  for(let i=0; i<input.length; i++){
    if(input[i]<=0){
      odd += input[i];
    }else{
      evenCount++;
    }
  }
  if(evenCount==0&&odd==0){return [];}
  return [evenCount,odd];
}
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);