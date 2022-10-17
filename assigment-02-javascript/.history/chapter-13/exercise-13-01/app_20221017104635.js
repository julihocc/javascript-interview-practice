const { bitXorDependencies } = require("mathjs");

const wrapper = document.getElementById('wrapper');

for (let i = 1; i <= 25; i++) {
    wrapper.innerHTML += `<div class="box" id="div-${i}">${i}<\div>`;
}

const boxes = document.getElementsByClassName("box");
console.log('boxes:', boxes)

boxes.array.forEach(element => {
    log
});
