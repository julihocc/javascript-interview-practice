const wrapper = document.getElementById('wrapper');

const addCode = () => {
    for (let i=1; i<=25; i++){
        wrapper.innerHTML += `<div class="box" onclick="myFunction>${i}<\div>`
    }
}

window.addEventListener('load', addCode)