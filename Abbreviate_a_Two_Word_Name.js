function abbrevName(name){
    return name.split(" ").map((val)=>val.slice(0,1).toUpperCase()).join(".");
}
console.log(abbrevName("Patrick Feenan"));

