const ncols = document.getElementById('ncols')
const nrows = document.getElementById('nrows')
const wrapper = document.getElementById('wrapper');


ncols.addEventListener('input', e =>{
    console.log(e.target.value);
})

nrows.addEventListener('input', e =>{
    console.log(e.target.value);
})