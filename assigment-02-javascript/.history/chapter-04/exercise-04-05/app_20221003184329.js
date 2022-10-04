const distance(...arr) => {
    n = arr.length;
    if (n===4|n===6) {
        quad_distance = 0;
        for(let i=0; i<n/2; i++){
            quad_distance += (arr[i]-arr[n+i])**2;
        }
        return Math.sqrt(quad_distance)
    }
    else {
        throw "Insufficient parameters";
    }
}

const x1 = 1, y1 = 2, z1 = 1;
const x2 = 2, y2 = 2, z2 = 4;

