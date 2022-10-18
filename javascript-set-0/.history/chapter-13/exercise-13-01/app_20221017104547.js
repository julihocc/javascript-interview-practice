const wrapper = document.getElementById('wrapper');

for (let i = 1; i <= 25; i++) {
    wrapper.innerHTML += `<div class="box" id="div-${i}">${i}<\div>`;
    const thisDiv = document.getElementById(`div-${i}`);
}

const boxes = document.get