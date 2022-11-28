String.prototype.toJadenCase = function () {
    let str = this.replace(/ +(?= )/g,'');
    return str.trim().split(" ").reduce((acc,x)=>acc+" "+x.charAt(0).toUpperCase()+x.slice(1),"").trim();
};