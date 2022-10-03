const addRec = (x, ...arr) => {
    if (arr.length > 0)  {
        return x[0] + addRec(arr)
    } else {
        return x
    }
}

const arr = [1, 3, 5, 7];
const sum = addRec(arr);
console.log(sum);