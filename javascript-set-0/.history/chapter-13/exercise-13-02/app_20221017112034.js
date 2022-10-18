const b = document.getElementById("myButton");
let  n = 1

b.addEventListener('click', e =>{    
    if (n<=3) {
        console.log(n);
        n++;
    } 
})

