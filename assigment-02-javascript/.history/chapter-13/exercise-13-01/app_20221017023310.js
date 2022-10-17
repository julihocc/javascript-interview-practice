const wrapper = document.getElementById('wrapper');

const addCode = () => {
    for (let i=1; i<=25; i++){
        wrapper.innerHTML += `<div class="box" id="div-${i}">${i}<\div>`;
        console.log(i)
        let thisDiv = document.getElementById(`div-${i}`);
        console.log('thisDiv:', thisDiv);
        thisDiv.addEventListener('click', (event) => {console.log(event)}, false)
    }
}

window.addEventListener('load', addCode)