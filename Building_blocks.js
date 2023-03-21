class Block{
    constructor(data){
      this.w = data[0];
      this.l = data[1];
      this.h = data[2];
    }
    getWidth(){
      return this.w;
    }
    getLength(){
      return this.l;
    }
    getHeight(){
      return this.h;
    }
    getVolume(){
      return this.w*this.l*this.h;
    }
    getSurfaceArea(){
      return 2*((this.w*this.l)+(this.l*this.h)+(this.h*this.w));
    }
}
let b = new Block([2,4,6]);
console.log(b.getWidth());