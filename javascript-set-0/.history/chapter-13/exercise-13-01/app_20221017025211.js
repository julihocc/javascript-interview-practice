const wrapper = document.getElementById('wrapper');

const addCode = () => {
    for (let i=1; i<=25; i++){
        wrapper.innerHTML += `<div class="box" id="div-${i}">${i}<\div>`;
    }
}

window.addEventListener('load', addCode)


let boxes = document.getElementsByClassName('box');
boxes
console.log(boxes.length)