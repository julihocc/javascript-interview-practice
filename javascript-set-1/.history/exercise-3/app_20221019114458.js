const testElement = document.getElementById('test-element')

// const unboundFunction = (color, fontSize, backgroundColor) =>  console.log(this);

const unboundFunction = function (color, fontSize, backgroundColor) {
    console.log(this)
}


unboundFunction('blue', '40px', 'green')

const boundFunction = (element, color='blue', fontSize='40px', backgroundColor='red') => unboundFunction.call(element, color, fontSize, backgroundColor)

boundFunction
// boundFunction(testElement, 'blue', '40px', 'green')

