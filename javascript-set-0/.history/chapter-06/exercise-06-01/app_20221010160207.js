class Shape {
    constructor(pEdges) {
        this.pEdges = pEdges
    }

    fnDisplay() {
        return this.pEdges
    }
}

class Quadrilateral extends Shape {
    
}

myShape = new Shape(2);
console.log(myShape.fnDisplay())

