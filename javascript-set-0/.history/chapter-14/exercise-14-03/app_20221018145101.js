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
        article[index].style.overflow = 'visible';

        snippet[index].style.width = '90vmax';
        snippet[index].style.float = 'none';

        title[index].style.color = 'blue';
        title[index].style.textDecoration = 'underline';
    })
}


function addResetTemplateListener(el) {
    el.addEventListener('click', e => {
        console.log('ok: ', el)

        // article[index].style.display = 'inline';
        // article[index].style.height = 'auto';
        // article[index].style.overflow = 'visible';

        article.forEach(element => {
            element.style.display = 'block';
            element.style.height = '200px';
            element.style.overflow = 'hidden';
        });

        // title[index].style.color = 'blue';
        // title[index].style.textDecoration = 'underline';
        title.forEach(element => {
            element.style.color = 'black';
        })

        // snippet[index].style.width = '90vmax';
        // snippet[index].style.float = 'none';
        // snippet[index].style.textAlign = 'justify';
        snippet.forEach(element => {
            // background-color: lightcyan; 
            // height: 200px;
            // width: 50vmax;
            // padding: 5px;
            // margin: 5px;
            // float: right;
            // text-align: justify;
            
    element.style.backgroundColor= 'lightcyan'; 
    element.style.height: '200px';
    element.style.width: '50vmax';
    element.style.padding: '5px';
    element.style.margin: '5px';
    element.style.float: 'right';
    element.style.textAlign: 'justify';
}
        }
        })
})
}

for (el of [pic, snippet]) {
    for (index in [0, 1, 2]) {
        addTemplateListener(el, index);
    }
}

title.forEach(addResetTemplateListener)