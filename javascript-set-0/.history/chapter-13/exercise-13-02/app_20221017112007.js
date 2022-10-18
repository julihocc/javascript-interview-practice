const b = document.getElementById("myButton");
let  n = 1
b.addEventListener('click', e =>{    
    if (n<=3) {
        n = n+1;
        alert(n)
    } 
})
if(n>3)