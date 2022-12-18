

class Shapes{

   printfunction(){

    }
}

class Cones implements Shapes{

    printfunction(): void {
    }
    r:number;
    l:number;
    area:number;
    pi:number;
    constructor(r,l,pi) {
      this.area = pi*r(l+r)
    }
    

}

class Spheres implements Shapes{
    printfunction(): void { 
    }
    r :number;
    pi:number;
    area:number;
    constructor(r,pi) {
      this.area = 4*pi*r
    }
}

class Rectangles implements Shapes{
    printfunction(): void { 
    }
    length:number;
    breadth:number;
    area:number;
    constructor(length,breadth) {
     this.area = length*breadth;
    }
}


let areaofsphre = new Spheres(12,3.14,);
let areaofrectangle= new Rectangles(20,30);
let areaofcone = new Cones(12,70,3.14);

console.log(areaofcone.area)
console.log(areaofrectangle.area)
console.log(areaofcone.area)








