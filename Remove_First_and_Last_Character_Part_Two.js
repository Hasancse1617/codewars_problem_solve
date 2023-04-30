function array(string) {
    let a = string.split(","), l = a.length-1, ans;
    ans = a.filter((val,index)=>(index!=0 && index!=l));
    return ans.join(" ")==""?null:ans.join(" ");
}