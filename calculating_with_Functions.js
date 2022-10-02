var obj = {};

function zero(x) {
    if(!x){
        obj.num1 = 0;
        return obj;
    }else{
        return x.method == '+' ? (0 + x.num1): x.method == '-' ? (0 - x.num1) : x.method == '*' ? (0 * x.num1) : x.method == '/' ? parseInt(0 / x.num1) : '';
    }
}
function one(x) {
    if(!x){
        obj.num1 = 1;
        return obj;
    }else{
        return x.method == '+' ? (1 + x.num1): x.method == '-' ? (1 - x.num1) : x.method == '*' ? (1 * x.num1) : x.method == '/' ? parseInt(1 / x.num1) : '';
    }
}
function two(x) {
    if(!x){
        obj.num1 = 2;
        return obj;
    }else{
        return x.method == '+' ? (2 + x.num1): x.method == '-' ? (2 - x.num1) : x.method == '*' ? (2 * x.num1) : x.method == '/' ? parseInt(2 / x.num1) : '';
    }
}
function three(x) {
    if(!x){
        obj.num1 = 3;
        return obj;
    }else{
        return x.method == '+' ? (3 + x.num1): x.method == '-' ? (3 - x.num1) : x.method == '*' ? (3 * x.num1) : x.method == '/' ? parseInt(3 / x.num1) : '';
    }
}
function four(x) {
    if(!x){
        obj.num1 = 4;
        return obj;
    }else{
        return x.method == '+' ? (4 + x.num1): x.method == '-' ? (4 - x.num1) : x.method == '*' ? (4 * x.num1) : x.method == '/' ? parseInt(4 / x.num1) : '';
    }
}
function five(x) {
    if(!x){
        obj.num1 = 5;
        return obj;
    }else{
        return x.method == '+' ? (5 + x.num1): x.method == '-' ? (5 - x.num1) : x.method == '*' ? (5 * x.num1) : x.method == '/' ? parseInt(5 / x.num1) : '';
    }
}
function six(x) {
    if(!x){
        obj.num1 = 6;
        return obj;
    }else{
        return x.method == '+' ? (6 + x.num1): x.method == '-' ? (6 - x.num1) : x.method == '*' ? (6 * x.num1) : x.method == '/' ? parseInt(6 / x.num1) : '';
    }
}
function seven(x) {
    if(!x){
        obj.num1 = 7;
        return obj;
    }else{
        return x.method == '+' ? (7 + x.num1): x.method == '-' ? (7 - x.num1) : x.method == '*' ? (7 * x.num1) : x.method == '/' ? parseInt(7 / x.num1) : '';
    }
}
function eight(x) {
    if(!x){
        obj.num1 = 8;
        return obj;
    }else{
        return x.method == '+' ? (8 + x.num1): x.method == '-' ? (8 - x.num1) : x.method == '*' ? (8 * x.num1) : x.method == '/' ? parseInt(8 / x.num1) : '';
    }
}
function nine(x) {
    if(!x){
        obj.num1 = 9;
        return obj;
    }else{
        return x.method == '+' ? (9 + x.num1): x.method == '-' ? (9 - x.num1) : x.method == '*' ? (9 * x.num1) : x.method == '/' ? parseInt(9 / x.num1) : '';
    }
}

function plus(x) {
    x.method = '+';
    return x;
}
function minus(x) {
    x.method = '-';
    return x;
}
function times(x) {
    x.method = '*';
    return x;
}
function dividedBy(x) {
    x.method = '/';
    return x;
}


console.log(six(dividedBy(two())));