function nextBigger(n){
    let m = n, f=[],s=[],j=0,a;
    if(n<10){
        return -1;
    }
    n = n.toString();
    s.unshift(n[n.length-1]);
    for (let i=n.length-1; i > 0; i--) {
        if(n[i-1] >= s[0] && j==0){
            s.unshift(n[i-1]);
        }else{
            j=1;
            f.unshift(n[i-1]);
        }
    }
    
    if(f.length == 0 || s.length == 0){
        return -1;
    }else{
        a=0;
        for(let i=0; i<s.length; i++){
            if(f[f.length-1] < s[i] && s[i] < s[a]){
                // [s[i],f[f.length-1]] = [f[f.length-1],s[i]];
                a=i;
            }
        }
    }
    [s[a],f[f.length-1]] = [f[f.length-1],s[a]];
    s = s.sort((a,b)=>{return a-b});
    // console.log(parseInt([...f,...s].join("")));
    return parseInt([...f,...s].join(""));
}
nextBigger(5535783894);