function sumTwoSmallestNumbers(numbers) {  
    numbers = numbers.sort((x,y)=>x-y);
    return numbers[0]+numbers[1];
}