const wrapper = document.getElementById('wrapper');

for (let i = 1; i <= 25; i++) {
    wrapper.innerHTML += `<div class="box" id="div-${i}">${i}<\div>`;
    const thisDiv = document.getElementById(`div-${i}`);
}

document.getElementById('div-1').addEventListener('click', (e)=> console.log(1))
document.getElementById('div-2').addEventListener('click', (e)=> console.log(2))