const jsonData = require('./holidays-us-2022.json'); 
const obj = jsonData["response"]["holidays"]["100"];
console.log(typeof obj);
Object.keys(obj).forEach((prop)=> console.log(prop, obj[prop]));

const searchByDate = (year, month, day) => {
    const jsonData = require('./holidays-us-2022.json'); 
    const obj = jsonData["response"]["holidays"]
}