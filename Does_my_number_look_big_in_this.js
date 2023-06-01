function narcissistic(value) {
    let s = value.toString(), n = s.length;
    return s.split("").reduce((acc,val)=>acc+Math.pow(val,n),0)==value;
}
console.log(narcissistic(1652))