"strict mode"

const changeBase(x, b=13) {
    let p = 1;
    let residuals = []:
    while (x>0) {
        r = x%(b**p);
        residuals.push(r);
        x = x-r;
        p++;
    }
}

const mul = (x,y) => {
    return x*y     
}

const x = 100

console.lg
console.log(mul(9,6))