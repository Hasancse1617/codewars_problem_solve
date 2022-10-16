function pigIt(str){
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if(/^[a-zA-Z0-9]+$/.test(arr[i])){
            let last = arr[i].substr(0,1)+ "ay";
            arr[i] = arr[i]+last;
            arr[i] = arr[i].substr(1);
        }
        
    }
    return arr.join(" ");
}
pigIt("Hello world !");