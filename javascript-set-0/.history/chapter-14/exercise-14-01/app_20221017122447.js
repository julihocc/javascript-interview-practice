const ncols = document.getElementById('ncols');
const nrows = document.getElementById('nrows');
const wrapper = document.getElementById('wrapper');

nrows.addEventListener('input', e =>{
    let p = nrows.value;
    let q = ncols.value;
    console.log(p,q);
    wrapper.style.gridTemplateRows = `repeat(${p}, 1fr)`    
    console.log("🚀 ~ file: app.js ~ line 10 ~ wrapper.style.gridTemplateRows ", wrapper.style.gridTemplateRows )
})

ncols.addEventListener('input', e =>{
    let p = nrows.value;
    let q = ncols.value;
    console.log(p,q);
    wrapper.style.gridTemplateColumns = `repeat(${q}, 1fr)`
    console.log("🚀 ~ file: app.js ~ line 17 ~ wrapper.style.gridTemplateCols", wrapper.style.gridTemplateCols)
})
