const testElement = document.getElementById('test-element')

const f = (function(){
    console.log(this)
}).bind

f(testElement)