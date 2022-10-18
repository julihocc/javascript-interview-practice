const wrapper = document.getElementById('wrapper');

const addCode = () => {
    for (let i=1; i<=25; i++){
        wrapper.innerHTML += `<div class="box" id="${i}">${i}<\div>`;
        console.log(i)
        var thisDiv = document.getElementById(i);
        console.log('thisDiv:', thisDiv)
        
    }
}

window.addEventListener('load', addCode)