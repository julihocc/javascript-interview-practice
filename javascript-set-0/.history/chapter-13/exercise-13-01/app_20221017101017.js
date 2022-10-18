const wrapper = document.getElementById('wrapper');

for (let i = 1; i <= 25; i++) {
    wrapper.innerHTML += `<div class="box" id="div-${i}">${i}<\div>`;
    let thisDiv = document.getElementById(`div-${i}`);
    thisDiv.addEventListener('click', (e)=>console.log(i), false)
}

document.getElementById('div-1').addEventListener('click')