// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2{
    constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume(dimension){
    return this.length * this.width * this.height;
  }
  surfaceArea(surface) {
    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height))
  }
}
  let cuboid2 = new CuboidMaker2(4, 5, 5)
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130