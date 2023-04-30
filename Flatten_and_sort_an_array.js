"use strict";

function flattenAndSort(array) {
  let ans = [];
  for(let i=0; i<array.length; i++){
    ans.push(...array[i]);
  }
  return ans.sort((x,y)=>x-y);
}