function secondSymbol(s, symbol) {
    let a = s.replace(symbol,""),l;
    l = a.indexOf(symbol)
    return l>0?l+1:-1;
}