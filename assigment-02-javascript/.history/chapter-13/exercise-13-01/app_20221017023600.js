const wrapper = document.getElementById('wrapper');

const addCode = () => {
    for (let i=1; i<=25; i++){
        wrapper.innerHTML += `<div class="box" id="div-${i}">${i}<\div>`;
        console.log(i)
        let thisDiv = document.getElementById(`div-${i}`);
        console.log('thisDiv:', thisDiv);
        document.getElementById(`div-${i}`).addEventListener('click', (event) => {console.log(event)})
    }
}

window.addEventListener('load', addCode)
