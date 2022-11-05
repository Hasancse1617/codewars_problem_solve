String.prototype.isUpperCase = function() {
    return this.search(/[a-z]/g)!=-1? false:true;
  }
"c".isUpperCase();