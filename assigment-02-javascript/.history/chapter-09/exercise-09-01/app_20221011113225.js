
const myString = {prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}}
console.log("🚀 ~ file: app.js ~ line 4 ~ myString", myString)
console.log('type of myString', typeof myString);

function dataParse(stringForObject) {
    return eval(stringForObject);
}

const myObj = dataParse(myString)