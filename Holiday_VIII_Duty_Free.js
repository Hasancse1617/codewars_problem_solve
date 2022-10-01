function dutyFree(normPrice, discount, hol){
    let l = (normPrice*discount)/100;
    // console.log(parseInt(hol/l));
    return discount==0? Infinity: parseInt(hol/l);
}
dutyFree(191, 0, 6802);