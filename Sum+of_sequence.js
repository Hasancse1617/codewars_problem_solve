const sequenceSum = (begin, end, step) => {
    let sum = 0;
    for(let i=begin; i<=end; i=i+step){
      sum += i;
    }
    return sum;
};
console.log(sequenceSum(1, 5, 3));