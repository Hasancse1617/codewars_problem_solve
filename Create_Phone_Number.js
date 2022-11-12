function createPhoneNumber(numbers){
    if(numbers.filter((x)=>x>9).length!=0 || numbers.length != 10){
      return false;
    }
    console.log();
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
  }
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);


function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
}