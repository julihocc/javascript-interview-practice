const jsonData = require('./holidays-us-2022.json'); 
console.log(typeof jsonData["response"])
const obj = jsonData["response"]
console.log(JSON.stringify(obj, null, 4));