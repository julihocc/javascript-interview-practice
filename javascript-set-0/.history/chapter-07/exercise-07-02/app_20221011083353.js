const usData = require('./holidays-us.json'); 
const mxData = require('./holidays-mx.json'); 

function searchByDate(data, month, day) {    
    const obj = data["response"]["holidays"];
    const holidaysByDate = obj.filter(holiday => holiday["states"] === "All")
        .filter(holiday => {
            let date = holiday["date"]["datetime"];
            return date["month"] == month && date["day"] == day;
        })
    const holidaysNames = holidaysByDate.map(holiday => holiday["name"])
    return holidaysNames
}


console.log(searchByDate(usData, 10, 31));
console.log(searchByDate(mxData, 10, 31));

function usToMx(date)