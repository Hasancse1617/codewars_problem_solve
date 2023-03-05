function listToArray(list) {
    let ans = []; 
    while(list.next != null){
      ans.push(list.value);
      list = list.next;
    }
    ans.push(list.value);
    return ans;
}
var list1 = {value: 1, next: {value: 2, next: {value: 3, next: null}}}
console.log(listToArray(list1));