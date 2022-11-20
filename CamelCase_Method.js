String.prototype.camelCase=function(){
    let str = this.replace(/ +(?= )/g,'');
    return str.trim().split(" ").reduce((acc,x)=>acc+x.charAt(0).toUpperCase()+x.slice(1),"");
}
let a = "say hello ";
console.log(a.camelCase());
