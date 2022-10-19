const testElement = document.getElementById('test-element')

function unboundFunction (color='blue', fontSize = '40px', backgroundColor='lightsalmon') {
    console.log(this);
}

unboundFunction(testElement)

const boundFunction = (element, color='blue', fontSize = '40px', backgroundColor='lightsalmon') => unboundFunction.call(element, color='blue', fontSize = '40px', backgroundColor='lightsalmon')

