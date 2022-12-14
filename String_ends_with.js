function solution(str, ending){
    let l = ending.length;
    if(l==0){return true;}
    return str.substr(-l)==ending;
}
solution('abc', '');