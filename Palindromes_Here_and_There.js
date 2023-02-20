function convertPalindromes(numbers) {
    return numbers.map((x)=>x==x.toString().split("").reverse().join("")?1:0);
};
console.log(convertPalindromes([4, 23, 441, 565, 19, 818]));