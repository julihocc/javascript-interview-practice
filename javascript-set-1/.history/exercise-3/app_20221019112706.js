const testElement = document.getElementById('test-element')

const unboundFunction (color='blue', fontSize = '40px', backgroundColor='lightsalmon') => {
    console.log(this);
    color
}

unboundFunction()

const boundFunction = (element, color='blue', fontSize = '40px', backgroundColor='lightsalmon') => unboundFunction.call(element, color, fontSize , backgroundColor)

boundFunction(element)

