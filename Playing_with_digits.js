function digPow(n, p){
    let num = n.toString().split("").reduce((acc,val,index)=>acc+Math.pow(val,p+index),0);
    return Number.isInteger(num/n)?num/n:-1;
}
console.log(digPow(92, 1));