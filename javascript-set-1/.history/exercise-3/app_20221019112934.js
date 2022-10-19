const testElement = document.getElementById('test-element')

const unboundFunction = (color, fontSize, backgroundColor) => {
    console.log(this);
}

unboundFunction('blue', '40px', 'green')


// boundFunction(element)

