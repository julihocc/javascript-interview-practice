const ncols = document.getElementById('ncols');
const nrows = document.getElementById('nrows');
const wrapper = document.getElementById('wrapper');

nrows.addEventListener('input', e =>{
    let p = nrows.value, ncols.value
    console.log();
    nrows.style.gridTemplateRows = `repeat($)`
})

ncols.addEventListener('input', e =>{
    console.log(nrows.value, ncols.value);
    
})
