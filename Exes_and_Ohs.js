function XO(str) {
    let x,o;
    x = str.replace(/[^x]/gi,"").length;
    o = str.replace(/[^o]/gi,"").length;
    return x==o;
 }
 console.log(XO("xxOo"));
 
 