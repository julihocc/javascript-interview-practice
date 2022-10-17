const b = document.getElementById("myButton");
let n = 1

const incrementN = e => {
    if (n <= 3) {
        console.log(n);
        n++;
    }
}

const verifyN = e => {
    console.log();
}

b.addEventListener('click', incrementN)
b.addEventListener('click', )
