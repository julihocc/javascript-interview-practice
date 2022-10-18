const wrapper = document.getElementById('wrapper');

function myFunction() {
    alert(`${this}`);
}

const addCode = () => {
    for (let i=1; i<=25; i++){
        wrapper.innerHTML += `<div class="box" id="i">${i}<\div>`
        let thisDiv = document.getElementById('i')
        thisDiv.addEventListener('on')
    }
}

window.addEventListener('load', addCode)