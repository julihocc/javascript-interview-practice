const testElement = document.getElementById('test-element')

// const unboundFunction = (color, fontSize, backgroundColor) => {
//     console.log(this);
// }

function unboundFunction (color, fontSize, backgroundColor) {
    console.log(this);
}

unboundFunction('blue', '40px', 'green')

functoin boundFunction (element, color, fontSize, backgroundColor) => unboundFunction.call(element, color, fontSize , backgroundColor)

boundFunction(testElement, 'blue', '40px', 'green')

