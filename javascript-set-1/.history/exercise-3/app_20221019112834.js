const testElement = document.getElementById('test-element')

const unboundFunction (color, fontSize, backgroundColor) => {
    console.log(this);
}

unboundFunction()

const boundFunction = (element, color, fontSiz, backgroundColor='lightsalmon') => unboundFunction.call(element, color, fontSize , backgroundColor)

boundFunction(element)

