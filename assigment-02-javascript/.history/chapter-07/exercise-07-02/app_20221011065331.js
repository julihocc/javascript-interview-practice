const jsonData = require('./holidays-us-2022.json'); 
const obj = jsonData["response"]["holidays"]["100"];
console.log(typeof obj);
Object.keys(obj).forEach((prop)=> console.log(prop, obj[prop]));

const searchByDateUS = (year, month, day) => {
    const jsonData = require('./holidays-us-2022.json'); 
    const obj = jsonData["response"]["holidays"];
    const holidaysByDate = obj.filter(holiday => holiday["states"]==="All").filter( holiday => {
        let date = holiday["date"]["datetime"];
        return date["year"]===year && date["month"]===month && date["day"]===day;
    })
    const holidaysNames = holidaysByDate.map( holiday => holiday["name"])
    return holidaysNames
}

console.log(searchByDateUS(2022,01,01))