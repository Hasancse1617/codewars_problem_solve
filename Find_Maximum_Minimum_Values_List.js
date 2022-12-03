var min = function(list){
    
    return list.length>0? Math.min.apply(null, list):list[0];
}

var max = function(list){
    
    return list.length>0? Math.max.apply(null, list):list[0];
}