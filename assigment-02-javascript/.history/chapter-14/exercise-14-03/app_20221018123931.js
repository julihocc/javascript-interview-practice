const pic = Array.from(document.getElementsByClassName('pic'));
const row = Array.from(document.getElementsByClassName('row'));
const snippet = Array.from


pic[0].addEventListener('click', e => {
    row.forEach(element => {
        element.style.visibility = 'hidden';
    });
    row[0].style.visibility = 'visible';
})