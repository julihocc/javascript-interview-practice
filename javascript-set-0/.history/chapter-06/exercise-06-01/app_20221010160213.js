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

newShape = new Shape(2);
console.log(newShape.fnDisplay())

