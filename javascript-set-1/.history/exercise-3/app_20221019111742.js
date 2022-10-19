const testElement = document.getElementById('test-element')

const f = (element, color='blue', fontSize = '40px', backgroundColor='lightsalmon') => {
    (function(){
        
        console.log(this)
    })()
}

f(testElement)