function firstNonRepeatingLetter(str) {
    let obj = {}, ans=0;
    for ( let i of str) {         
        if(obj[i.toUpperCase()] || obj[i.toLowerCase()]){
            if(obj[i.toUpperCase()]){
                obj[i.toUpperCase()] = obj[i.toUpperCase()]+1;
            }
            else{
                obj[i.toLowerCase()] = obj[i.toLowerCase()]+1;
            }
        }else{
            obj[i] = 1;
        }
    }
    for (const key in obj) {
        if(obj[key]==1){
            return key;
        }
    }
    return "";
}
firstNonRepeatingLetter('sTrtess');