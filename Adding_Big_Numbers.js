function add(a, b) {
    let l = Math.max(a.length, b.length);
    let al = a.length;
    let bl = b.length;
    let temp = 0, arr =[], sum=0;
    for(let i=0; i<l; i++){
        // console.log(Number(a[al-i-1])+Number(b[bl-i-1]));
        if(!a[i]){
            sum = Number(b[bl-i-1])+temp;
            // console.log(sum);
            if(i == l-1){
                arr.unshift(sum);
                continue;
            }
            if(String(sum).length>1){
                arr.unshift(Number(String(sum)[1]));
                temp = Number(String(sum)[0]);
            }else{
                arr.unshift(sum);
                temp = 0;
            }
            
        }else if(!b[i]){
            sum = 0+Number(a[al-i-1])+temp;
            // console.log(sum);
            if(i == l-1){
                arr.unshift(sum);
                continue;
            }
            if(String(sum).length>1){
                arr.unshift(Number(String(sum)[1]));
                temp = Number(String(sum)[0]);
            }else{
                arr.unshift(sum);
                temp = 0;
            }
        }else{
            sum = Number(a[al-i-1])+Number(b[bl-i-1])+temp;
            // console.log(sum);
            if(i == l-1){
                arr.unshift(sum);
                continue;
            }
            if(String(sum).length>1){
                arr.unshift(Number(String(sum)[1]));
                temp = Number(String(sum)[0]);
            }else{
                arr.unshift(sum);
                temp = 0;
            }
        }
        sum = 0;
    }
    // console.log(arr.join("").toString());
    return arr.join("").toString(); // Fix me!
}
add("888", "222");