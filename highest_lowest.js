function highAndLow(string){
    let numbers = string.split(" ");
    console.log(numbers);
    let high = numbers[0];
    let low = numbers[0];
    for(i=1; i<numbers.length; i++){
      if(parseInt(numbers[i]) > high){
        high = numbers[i];
      }
      if(parseInt(numbers[i]) < low){
        low = numbers[i];
      }
    }
    return `${high} ${low}`;
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))