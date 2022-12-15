function squareDigits(num){
    let str = num.toString().split(""),str1="";
    for(let i=0; i<str.length; i++){
      str1 += Number(str[i])*Number(str[i]);
    }
    return Number(str1);
  }
squareDigits(99);