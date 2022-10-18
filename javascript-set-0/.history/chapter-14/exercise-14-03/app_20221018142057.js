const pic = Array.from(document.getElementsByClassName('pic'));
const article = Array.from(document.querySelectorAll('article'));
const title = Array.from(document.querySelectorAll('h1'));
const snippet = Array.from(document.getElementsByClassName('snippet'));



function addTemplateListener(query, index) {
    query[index].addEventListener('click', e => {
        article.forEach(element => {
            element.style.display = 'none';
        });
        article[index].style.display = 'inline';
        article[index].style.height = 'auto';
        // article[index].style.visibility = 'visible';
        article[index].style.overflow = 'visible';
        pic[index].style.top = '20px';
        snippet[index].style.width = '90vmax';
        snippet[index].style.float = 'none';
        snippet[index].style.textAlign = 'justify';
        title[index].style.color = 'blue';
        title[index].style.textDecoration = 'underline';
    })
}

for (el of [pic, snippet]) {
    for (index in [0, 1, 2]) {
        addTemplateListener(el, index);
    }
}

function resetTemplateListener(el) {
    el.addEventListener('click', e => {
        article.forEach(element => {
            element.style.display = 'inline';
        });
        article[index].style.display = 'inline';
        article[index].style.height = 'auto';
        // article[index].style.visibility = 'visible';
        article[index].style.overflow = 'visible';
        pic[index].style.top = '20px';
        snippet[index].style.width = '90vmax';
        snippet[index].style.float = 'none';
        snippet[index].style.textAlign = 'justify';
        title[index].style.color = 'blue';
        title[index].style.textDecoration = 'underline';
    })
}

for (index in [0,1,2]) {
    resetTemplateListener(index)
}