function nthFibo(n) {
    if(n == 1){ return 0;}
    if(n == 2){ return 1;}
    return nthFibo(n-1)+nthFibo(n-2);
}
console.log(nthFibo(4));