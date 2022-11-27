function nextPal(val) {
    let pal = 0;
    while(val != pal){
      val++;
      pal = Number(val.toString().split("").reverse().join(""));
    }
    console.log(pal);
    return pal;
}
nextPal(2541);