const testElement = document.getElementById('test-element')

// const unboundFunction = (color, fontSize, backgroundColor) => {
//     console.log(this);
// }

function unboundFunction (color, fontSize, backgroundColor) {
    console.log(this);
}

unboundFunction('blue', '40px', 'green')

const boundFunction = unboundFunction.bind(e(color, fontSize, backgroundColor)

boundFunction(testElement, 'blue', '40px', 'green')

