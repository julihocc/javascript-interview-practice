const wrapper = document.getElementById('wrapper');

function myFunction() {
    alert("Hello! I am an alert box!");
}

const addCode = () => {
    for (let i=1; i<=25; i++){
        wrapper.innerHTML += `<div class="box" onclick="myFunction()">${i}<\div>`
    }
}

window.addEventListener('load', addCode)