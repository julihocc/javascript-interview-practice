const ncols = document.getElementById('ncols');
const nrows = document.getElementById('nrows');
const wrapper = document.getElementById('wrapper');

function populateWrapper(p,q) {
    wrapper.innerHTML = "";
    for (let i=1; i<p*q; i++){
        wrapper.innerHTML += '<div>${i}</daiv>'
    }
}

nrows.addEventListener('input', e =>{
    let p = nrows.value;
    let q = ncols.value;
    console.log(p,q);
    wrapper.style.gridTemplateRows = `repeat(${p}, 1fr)`    
})

ncols.addEventListener('input', e =>{
    let p = nrows.value;
    let q = ncols.value;
    console.log(p,q);
    wrapper.style.gridTemplateColumns = `repeat(${q}, 1fr)`
})
