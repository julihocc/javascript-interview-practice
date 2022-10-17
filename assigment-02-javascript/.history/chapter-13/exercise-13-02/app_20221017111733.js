const b = document.getElementById("myButton");
const n = 0
b.addEventListener('click', e =>{
    
    if (n<3) {
        n++;
        alert(n)
    }

})