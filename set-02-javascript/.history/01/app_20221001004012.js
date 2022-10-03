"strict mode"

const changeBase = (x, b=13) => {
    let p = 1;
    let residuals = [];
    while (x>0) {
        r = x%(b**p);
        residuals.push(r);
        x = x-r;
        p++;
    }
    return residuals
}

const mul = (x,y) => {
    return x*y     
}

const x = 100

console.log(changeBase(100))
console.log(mul(9,6))