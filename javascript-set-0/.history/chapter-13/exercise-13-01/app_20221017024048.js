const wrapper = document.getElementById('wrapper');
const boxes = document.getElementsByClassName('box')

const addCode = () => {
    for (let i=1; i<=25; i++){
        wrapper.innerHTML += `<div class="box" id="div-${i}">${i}<\div>`;
    }
}

window.addEventListener('load', addCode)

console.log('boxes:', boxes)
boxes
console.log('boxes.length:', boxes.length)

for (let i=0; i<boxes.length; i++) {
    console.log(i)
}