function longest(s1, s2) {
    let str = s1+s2,ans;
    ans = [...new Set(str.split(""))].sort().join("");
    return ans;
}