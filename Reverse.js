reverse = function(array) {
  let reverse = [];
  for(let i=array.length-1; i>=0; i--){
    reverse.push(array[i]);
  }
  return reverse;
}

reverse([1,2,3]);