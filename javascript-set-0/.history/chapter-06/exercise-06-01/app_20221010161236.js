class Shape {
    constructor(pEdges) {
        this.pEdges = pEdges
    }

    fnDisplay() {
        return this.pEdges
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(4);
        this.width = width;
        this.height = height;
    }
    
    fnArea () {
        return this.width*this.height
    }

    fnPerimeter() {
        return 2*(this.width+this.height)
    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length)
    }
}

let newShape = new Shape(2);
console.log(newShape.fnDisplay());

let newRectangle = new Rectangle(2, 3);
console.log(newRectangle.fnArea());
console.log(newRectangle.fnPerimeter());

let newSquare = new Square(5);
console.log(newSquare.fnArea());
console.log(newSquare.);