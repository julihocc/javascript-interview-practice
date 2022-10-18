const wrapper = document.getElementById('wrapper');

for (let i = 1; i <= 25; i++) {
    wrapper.innerHTML += `<div class="box" id="div-${i}">${i}<\div>`;
    let thisDiv = document.getElementById(`div-${i}`)
}


let boxes = document.getElementsByClassName('box');
console.log('boxes:', boxes);
console.log(boxes.length);
console.log(boxes.item(24));