const pic1 = document.getElementById('pic1')
const row = Array.from(document.getElementsByClassName('row'));


pic1.addEventListener('click', e => {
    row.forEach(element => {
        element.style.visibility = 'hidden'
    });
    row[0]
})