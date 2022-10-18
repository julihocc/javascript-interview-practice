const pic = Array.from(document.getElementsByClassName('pic'));
const article = Array.from(document.querySelectorAll('article'));
const title = Array.from(document.querySelectorAll('h1'));
console.log('title:', title)
const snippet = Array.from(document.getElementsByClassName('snippet'));


pic[0].addEventListener('click', e => {
    article.forEach(element => {
        element.style.visibility = 'hidden';
    });
    article[0].style.height = 'auto';
    article[0].style.visibility = 'visible';
    article[0].style.overflow = 'visible';
    snippet[0].style.width = '90vmax';
    snippet[0].style.float = 'none';
    snippet[0].style.textAlign = 'justify';
})