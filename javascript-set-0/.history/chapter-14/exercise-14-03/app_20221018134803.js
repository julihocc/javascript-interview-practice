const pic = Array.from(document.getElementsByClassName('pic'));
const article = Array.from(document.querySelectorAll());
const snippet = Array.from(document.getElementsByClassName('snippet'));


pic[0].addEventListener('click', e => {
    row.forEach(element => {
        element.style.visibility = 'hidden';
    });
    row[0].style.height = 'auto';
    row[0].style.visibility = 'visible';
    row[0].style.overflow = 'visible';
    pic[0].style.float = 'left';
    snippet[0].style.width = '90vmax';
    snippet[0].style.float = 'none';
    snippet[0].style.textAlign = 'justify';
})