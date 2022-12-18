  var shapes = /** @class */ (function () {
    function shapes() {
    }
    shapes.prototype.printfunction = function () {
    };
    return shapes;
}());
var cone = /** @class */ (function () {
    function cone(r, l, pi) {
        this.area = pi * r(l + r);
    }
    cone.prototype.printfunction = function () {
    };
    return cone;
}());
var sphere = /** @class */ (function () {
    function sphere(r, pi) {
        this.area = 4 * pi * r;
    }
    sphere.prototype.printfunction = function () {
    };
    return sphere;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(length, breadth) {
        this.area = length * breadth;
    }
    Rectangle.prototype.printfunction = function () {
    };
    return Rectangle;
}());
var Sphere = new sphere(12, 3.14);
var rectangle = new Rectangle(20, 30);
var Cone = new cone(12, 70, 3.14);
console.log(Sphere.area);
console.log(rectangle.area);
console.log(Cone.area);
