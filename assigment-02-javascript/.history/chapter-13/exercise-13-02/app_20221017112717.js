const b = document.getElementById("myButton");
let n = 1

const incrementN = e => {
    if (n <= 2) {
        console.log(n);
        n++;
    }
    console.log('Already here!');
}

const verifyN = e => {
    if (n>3) {
        b.removeEventListener('click', incrementN)
    }
}

b.addEventListener('click', incrementN)
b.addEventListener('click', verifyN)
