const testElement = document.getElementById('test-element')

function unboundFunction (element, color='blue', fontSize = '40px', backgroundColor='lightsalmon') {
    console.log(this);
}

unboundFunction(testElement)


const boundFunction = (unboundFunction(testElement)
) unboundFunction.

