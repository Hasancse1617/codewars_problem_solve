function solve(s){
    if(s.length == 0){return [0,0,0,0];}
     return [s.replace(/[^A-Z]/g,"").length, s.replace(/[^a-z]/g,"").length, s.replace(/[^0-9]/g,"").length, s.replace(/[0-9A-Za-z]/g,"").length];
}
solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD");