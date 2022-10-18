const b = document.getElementById("myButton");
let  n = 0
b.addEventListener('click', e =>{
    
    if (n<3) {
        n = n+1;
        alert(n)
    } 
})