const wrapper = document.getElementById('wrapper');

const addCode = () => {
    for (let i=1; i<=25; i++){
        wrapper.innerHTML += `<div class="box" id="i">${i}<\div>`;
        let thisDiv = document.getElementById('i');
        thisDiv.addEventListener('onclick', () => {console.log(i)})
    }
}

window.addEventListener('load', addCode)