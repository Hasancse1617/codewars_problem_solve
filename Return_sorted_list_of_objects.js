function sortList (sortBy, list) {
    return list.sort((x,y)=>{
      if(sortBy=="a"){return y.a - x.a}
      else{return y.b - x.b}
    })
  }
  console.log(sortList("a",[
    {"a": 1, "b": 3},
    {"a": 3, "b": 2},
    {"a": 2, "b": 40},
    {"a": 4, "b": 12}
  ]))