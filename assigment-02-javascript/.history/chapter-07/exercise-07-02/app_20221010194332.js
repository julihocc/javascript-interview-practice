const jsonData = require('./holidays-us-2022.json'); 
const obj = jsonData["response"]["holidays"]["1"];
console.log(typeof obj);
Object.keys(obj).forEach((prop)=> console.log(prop));