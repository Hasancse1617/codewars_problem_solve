function stray(numbers) {
    let first = numbers[0], f1=0;
    let second = numbers[0], s1=0;
    for(let i=0;i<numbers.length;i++){
      if(first == numbers[i]){
        f1++;
      }else{
        second = numbers[i];
        s1++;
      }
    }
    console.log(f1==1?first:second);
    return f1==1?first:second;
  }
  stray([1,2, 1]);