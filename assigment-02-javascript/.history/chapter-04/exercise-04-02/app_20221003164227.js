const addRec = (...arr) => {
    x = arr[0]
    if (arr.length > 0)  {
        return x[0] + addRec(arr)
    } else {
        return x[0]
    }
}

const arr = [1, 3, 5, 7];
const sum = addRec(arr);
console.log(sum);