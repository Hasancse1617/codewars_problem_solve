function toCsvText(array) {
    let str="";
    for (let i = 0; i < array.length; i++) {
        if(array.length-1 == i){
            str+=array[i].toString();  
        }else{
            str+=array[i].toString()+'\n';
        }
        // console.log(array.toString());
    }
    // console.log( str);
    return str;
}
toCsvText([
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
   ]);