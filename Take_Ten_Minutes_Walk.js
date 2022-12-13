function isValidWalk(walk) {
    function countDirection(val) {
      return walk.filter((x)=>x==val).length;
    }
    return walk.length==10 && countDirection('n')==countDirection('s') && countDirection('w')==countDirection('e');
}