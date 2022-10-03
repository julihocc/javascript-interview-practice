const addRec = (x, ...arr) => {
    if arr.length > {
        return x + addRec(arr)
    } else {
        return x 
    }
}

const arr = [1, 3, 5, 7];
const sum = addRec(arr);
log