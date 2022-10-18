const wrapper = document.getElementById('wrapper');

const addCode = () => {
    for (let i=1; i<=25; i++){
        wrapper.innerHTML += `<div class="box" id="div-${i}">${i}<\div>`;
    }
}

window.addEventListener('load', addCode)

console.log('boxes:', boxes)
console.log('typeof :', typeof boxes)
console.log('boxes.length:', boxes.length)

for (let i=0; i<boxes.length; i++) {
    console.log(i)
}