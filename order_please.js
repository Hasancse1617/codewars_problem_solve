function order(words){
    if(words.length != 0){
        let arr = words.split(" ");
        arr.sort(function(a,b){return a.replace(/[^0-9]/g,'') - b.replace(/[^0-9]/g,'')});
        return arr.join(" ");
    }else{
        return "";
    }
}

order("is2 Thi1s T4est 3a");