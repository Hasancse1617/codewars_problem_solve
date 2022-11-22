function generateHashtag (str) {
    str = str.replace(/ +(?= )/g,'');
    if(str == "" || str == " "){
        return false;
    }
    if(str.length >= 140){return false}
    const arr = str.split(" ");
    // console.log(arr.reduce((acc,x)=>acc+x.charAt(0).toUpperCase()+x.slice(1), "#"));
    return arr.reduce((acc,x)=>acc+x.charAt(0).toUpperCase()+x.slice(1), "#");
}
generateHashtag(" ".repeat(200));