function addLength(str) {
    return str.split(" ").map((x)=>x+" "+x.length);
 }
 console.log(addLength('apple ban'))