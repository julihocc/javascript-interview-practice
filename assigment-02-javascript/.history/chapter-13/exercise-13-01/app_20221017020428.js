const wrapper = document.getElementById('wrapper');

function myFunction() {
    alert(`${this}`);
}

const addCode = () => {
    for (let i=1; i<=25; i++){
        wrapper.innerHTML += `<div class="box" id="i">${i}<\div>`
        con
    }
}

window.addEventListener('load', addCode)