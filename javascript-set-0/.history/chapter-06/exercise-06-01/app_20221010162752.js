class Shape {
    constructor(...pEdges) {
        this.pEdges = pEdges
    }

    fnDisplay() {
        this.pEdges.forEach((value, index) => {
            console.log(`Size of edge #${index}: ${value}`)
        })
    }

    fnPerimeter() {
        
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }

    fnArea() {
        return this.pEdges[0] * this.pEdges[1]
    }

    fnPerimeter() {
        return 2 * (this.pEdges[0] + this.pEdges[1])
    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length)
    }
}

// class Triangle extends Shape {
//     constructor(3);
//     this.a = a;
//     this.b = b;
//     this.c = c;
// }

let newShape = new Shape(2, 3, 5, 6);
console.log(newShape.fnDisplay());

let newRectangle = new Rectangle(2, 3);
console.log(newRectangle.fnArea());
console.log(newRectangle.fnPerimeter());

let newSquare = new Square(5);
console.log(newSquare.fnArea());
console.log(newSquare.fnPerimeter());

