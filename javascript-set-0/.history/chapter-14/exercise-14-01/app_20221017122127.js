const ncols = document.getElementById('ncols');
const nrows = document.getElementById('nrows');
const wrapper = document.getElementById('wrapper');

nrows.addEventListener('input', e =>{
    let p = nrows.value;
    let q = ncols.value;
    console.log(p,q);
    wr.style.gridTemplateRows = `repeat(${p}, 1fr)`
})

ncols.addEventListener('input', e =>{
    console.log(nrows.value, ncols.value);
    
})

