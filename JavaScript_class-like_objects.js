class Animal{
    constructor(name,type){
      this.name = name;
      this.type = type;
    }
    toString(){
      return this.name+" is a "+ this.type;
    }
}
var dog = new Animal('Max', 'dog');