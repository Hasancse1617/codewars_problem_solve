function removeSmallest(numbers) {
    let min,arr=[],index;
    min = Math.min(...numbers);
    index = numbers.indexOf(min);
    arr = numbers.filter((x,i)=>i!=index);
    return arr;
  }
  console.log(removeSmallest([1, 2, 3, 4, 5]));