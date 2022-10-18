const pic1 = document.getElementById('pic1')
const row = Array.;


pic1.addEventListener('click', e => {
    row.forEach(element => {
        element.style.visibility = 'hidden'
    });
})