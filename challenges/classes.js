// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
class CuboidMaker{
    constructor(attrs){
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
    };

     volume(){
        return this.length * this.width * this.height;
      };
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
      };
    } //Class CuboidMaker Finishes

      const cuboid = new CuboidMaker({
        length: 4,
        width: 5,
        height: 5
      });

      

//console.log(cuboid.volume()); // 100
//console.log(cuboid.surfaceArea()); // 130
  
  
  

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.



class CubeMaker extends CuboidMaker{
    constructor(attrs){
        super(attrs);
        this.length = attrs.length;
        this.width = attrs.width;
        this.height= attrs.height;
    }
    volume(){ // Volume of a Cube = LENGTH x WIDTH x HEIGHT
        return this.length * this.width * this.height;
      };

      surfaceArea() { //Surface Area of a Cube = 6 * a^2
        return 6 * (this.length * this.length + this.height * this.height + this.width * this.width)
      };
   
} //Class Extends CubeMaker Ends
const cube = new CubeMaker({
    length: 4,
    width: 5,
    height: 5
});

console.log(cube.volume()); // 
console.log(cube.surfaceArea()); // 