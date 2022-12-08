function getSum( a,b )
{
  let sum=0,min,max;
  min = Math.min(a,b);
  max = Math.max(a,b);
  for(let i=min; i<=max; i++){
     sum = sum + i;
   }
  return sum;
}