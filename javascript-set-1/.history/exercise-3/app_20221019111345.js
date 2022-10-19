const testElement = document.getElementById('test-element')

const f = (element, color='blue', fontSize = '40px', backgroundColor='lightsalmon') => {
    console.log(this);
}

f()