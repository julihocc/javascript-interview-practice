const myRange = document.getElementById('myRange');
const content = document.getElementById('content');

myRange.addEventListener('click', (e) => {
    content.style.columnCount = myRange.value; 
})

