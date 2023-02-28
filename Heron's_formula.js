function heron(a, b, c) {
    let s = (a+b+c)/3;
    return Number(Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2));
}
console.log(heron(3,6,5));