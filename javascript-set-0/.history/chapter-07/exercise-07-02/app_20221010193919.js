const jsonData = require('./holidays-us-2022.json'); 
const obj = jsonData["response"]
console.log(typeof obj)
console.log(JSON.stringify(obj, null, 4));