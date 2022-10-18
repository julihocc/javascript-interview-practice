const pic1 = document.getElementById('pic1')
const row = document.getElementsByClassName('row');
console.log(typeof );

pic1.addEventListener('click', e => {
    row.forEach(element => {
        element.style.visibility = 'hidden'
    });
})