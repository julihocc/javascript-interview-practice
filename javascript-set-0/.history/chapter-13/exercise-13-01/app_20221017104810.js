const wrapper = document.getElementById('wrapper');

for (let i = 1; i <= 25; i++) {
    wrapper.innerHTML += `<div class="box" id="div-${i}">${i}<\div>`;
}

const boxes = Array.from(document.getElementsByClassName("box"));
console.log('boxes:', boxes)

boxes.forEach(element => {
    console.log(element.id);
    element.addEventListener('c')
});
