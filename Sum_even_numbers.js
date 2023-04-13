function sumEvenNumbers(input) {
    return input.filter((val)=>val%2==0).reduce((acc,val)=>acc+val);
}