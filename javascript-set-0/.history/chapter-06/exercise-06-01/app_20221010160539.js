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
        super(4)
    }
}

newShape = new Shape(2);
console.log(newShape.fnDisplay())

