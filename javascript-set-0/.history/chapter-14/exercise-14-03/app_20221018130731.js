const pic = Array.from(document.getElementsByClassName('pic'));
const row = Array.from(document.getElementsByClassName('row'));
const snippet = Array.from(document.getElementsByClassName('snippet'));


pic[0].addEventListener('click', e => {
    row.forEach(element => {
        element.style.visibility = 'hidden';
    });
    row[0].style.height = 'auto';
    row[0].style.visibility = 'visible';
    row[0].style.overflow = 'visible';
    pic[0].style.float = 'left';
    snippet[0].style.floatt = ;
})