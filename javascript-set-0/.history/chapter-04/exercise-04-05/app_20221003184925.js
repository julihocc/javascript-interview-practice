const distance = (...arr) => {
    n = arr.length;
    // console.log(n);
    if (n===4|n===6) {
        quad_distance = 0;
        for(let i=0; i<n/2; i++){
            let xo = arr[i];
            let xf = arr[n/2+i];
            // console.log(xo, xf)
            quad_distance += (xo - xf)**2;
        }
        console.log(quad_distance);
        return Math.sqrt(quad_distance)
    }
    else {
        throw "Insufficient parameters";
    }
}

const x1 = 1, y1 = 2, z1 = 1;
const x2 = 2, y2 = 2, z2 = 4;

const delta1 = distance(x1, y1, x2, y2);
console.log(delta1);

const delta2 = distance(x1, y1, z1, x2, y2, z2);