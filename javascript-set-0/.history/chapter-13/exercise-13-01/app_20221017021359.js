const wrapper = document.getElementById('wrapper');

const addCode = () => {
    for (let i=1; i<=25; i++){
        wrapper.innerHTML += `<div class="box" id="${i}">${i}<\div>`;
        let thisDiv = document.getElementById(i);
        console.log(thisDiv.name)
        thisDiv.addEventListener('click', () => {console.log('hi')})
    }
}

window.addEventListener('load', addCode)