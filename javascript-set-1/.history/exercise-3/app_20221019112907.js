const testElement = document.getElementById('test-element')

const unboundFunction (color, fontSize, backgroundColor) => {
    console.log(this);
}

unboundFunction('blue', )

const boundFunction = (element, color, fontSize, backgroundColor) => unboundFunction.call(element, color, fontSize , backgroundColor)

boundFunction(element)

