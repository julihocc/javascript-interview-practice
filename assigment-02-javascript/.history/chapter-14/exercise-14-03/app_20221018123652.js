const pic = Array
const row = Array.from(document.getElementsByClassName('row'));


pic1.addEventListener('click', e => {
    row.forEach(element => {
        element.style.visibility = 'hidden';
    });
    row[0].style.visibility = 'visible';
})