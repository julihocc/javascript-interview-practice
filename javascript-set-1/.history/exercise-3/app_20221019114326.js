const testElement = document.getElementById('test-element')

// const unboundFunction = (color, fontSize, backgroundColor) =>  console.log(this);

const unboundFunction = function (color, fontSize, backgroundColor) {
    con
}


unboundFunction('blue', '40px', 'green')

const boundFunction = (element, color, fontSize, backgroundColor) => unboundFunction.call(element, color, fontSize, backgroundColor)

boundFunction(testElement, 'blue', '40px', 'green')

