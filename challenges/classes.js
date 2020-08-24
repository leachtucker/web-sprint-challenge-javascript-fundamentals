// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(length, width, height) {
//     this.length = length;
//     this.width = width;
//     this.height = height;
// }

// CuboidMaker.prototype.volume = function() {
//     return this.length * this.width * this.height;
// }

// CuboidMaker.prototype.surfaceArea = function() {
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }

class Cuboid {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid2 = new Cuboid(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// I could extend the CuboidMaker class or extend the Cuboid Class. Not sure which it wants from me, so I will do both.
class Cube extends Cuboid {
    constructor(side) {
        // A cube is a cuboid but with all its sides equal in length. Therefore, we can accept one param in the constructor function and the call its parent's constructor function with that single side param.
        super(side, side, side);
    }
    volume() {
        return this.length * this.length * this.length;
    }
    surfaceArea() {
        return 6 * (this.length * this.length);
    }
}

const cube = new Cube(3);

console.log("Cube:");
console.log(cube.volume()); // 27
console.log(cube.surfaceArea()); // 54

function CubeMaker(side) {
    CuboidMaker.call(this, side, side, side);
}

CubeMaker.prototype.volume = function() {
    return this.length * this.length * this.length;
}

CubeMaker.prototype.surfaceArea = function() {
    return 6 * (this.length * this.length);;
}

CubeMaker.prototype = Object.create(CuboidMaker.prototype);

const cube2 = new CubeMaker(3);

console.log("Cube2 (CubeMaker):");
console.log(cube2.volume()); // 27
console.log(cube2.surfaceArea()); // 54