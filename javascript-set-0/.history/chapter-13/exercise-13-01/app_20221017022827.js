const wrapper = document.getElementById('wrapper');

const addCode = () => {
    for (let i=1; i<=25; i++){
        wrapper.innerHTML += `<div class="box" id="div-${i}">${i}<\div>`;
        console.log(i)
        let thisDiv = document.getElementById(`div-`);
        console.log('thisDiv:', thisDiv);
        thisDiv.addEventListener('click', () => {console.log('hi')})
    }
}

window.addEventListener('load', addCode)