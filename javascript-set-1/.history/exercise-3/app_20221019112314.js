const testElement = document.getElementById('test-element')

const unboundFunction = (element, color='blue', fontSize = '40px', backgroundColor='lightsalmon') => {
    console.log(this);
}

const boundFunction = (element, color='blue', fontSize = '40px', backgroundColor='lightsalmon')

unboundFunction(testElement)
