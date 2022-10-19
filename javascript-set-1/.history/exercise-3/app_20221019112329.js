const testElement = document.getElementById('test-element')

function unboundFunction (element, color='blue', fontSize = '40px', backgroundColor='lightsalmon') {
    console.log(this);
}

const boundFunction = (element, color='blue', fontSize = '40px', backgroundColor='lightsalmon')

unboundFunction(testElement)

