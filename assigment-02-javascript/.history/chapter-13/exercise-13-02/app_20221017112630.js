const b = document.getElementById("myButton");
let n = 1

const incrementN = e => {
    if (n <= 3) {
        console.log(n);
        n++;
    }
}

const verifyN = e => {
    if (n>3) {
        b.removeEventListener('click', incrementN)
    }
    console.log('hi');
}

b.addEventListener('click', incrementN)
b.addEventListener('click', verifyN)