function Archiver() {
    var temperature = null;
    var archive = [];
    Object.defineProperty(this, 'temperature',{
      get: function(){return temperature;},
      set: function(x){
        temperature = x;
        archive.push({date: new Date(), val: x});
      }
    });
    this.getArchive = function() {return archive;};
}
var arc = new Archiver();
arc.temperature = 33;
arc.temperature = 28;
arc.temperature = 21;
console.log(arc.getArchive());